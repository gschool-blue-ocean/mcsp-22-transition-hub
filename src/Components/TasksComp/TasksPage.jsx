import React, { useState, useEffect, useContext } from "react";
import "./tasks.css";
import StudentContext from "../Context/StudentContext";
import moment from "moment";
import UpdateModal from "./UpdateModal";
import { useParams } from 'react-router-dom'
import UrlContext from "../Context/UrlContext";

const TasksPage = () => {
  const {
    handleCheckboxChange,
    toggleAccordion,
    tasks,
    activeTaskId,
    setTasks,
  } = useContext(StudentContext);


  const [sortedTasks, setSortedTasks] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [sortMethod, setSortMethod] = useState("dueDate");

  const {url} = useContext(UrlContext)

  const { studentIdentification } = useParams()


  useEffect(() => {
    const fetchTasks = async () => {
          try {
            const response = await fetch(`${url}/tasks/${studentIdentification}`);
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            setTasks([...data]);
          } catch (error) {
            console.log(error);
          }
      };
      fetchTasks()
  }, [studentIdentification]);

  useEffect(() => {
    const sortTasks = () => {
      const sortedArray = [...tasks].sort((a, b) => {
        if (sortMethod === "dueDate") {
          return new Date(a.duedate) - new Date(b.duedate);
        } else {
          return new Date(a.apptdate) - new Date(b.apptdate);
        }
      });
      setSortedTasks(sortedArray);
    };
    sortTasks(); 
  }, [tasks, sortMethod]);



  const updateTaskInList = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.tasksid === updatedTask.tasksid ? updatedTask : task
    );
    setTasks(updatedTasks);
  };




  const toggleSortMethod = () => {
    setSortMethod((prevSortMethod) =>
      prevSortMethod === "dueDate" ? "apptDate" : "dueDate"
    );
  };

  const openModalWithTask = (task) => {
    const defaultTask = {
      taskname: "",
      taskdescription: "",
      duedate: "",
      apptdate: "",
      ...task,
    };
    setCurrentTask(task);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentTask(null);
  };

  // const sortedTasks = [...tasks].sort((a, b) => {
  //   if (sortMethod === "dueDate") {
  //     return new Date(a.duedate) - new Date(b.duedate);
  //   } else {
  //     return new Date(a.apptdate) - new Date(b.apptdate);
  //   }
  // });

  const renderTask = (task) => {
    const today = moment();
    const dueDate = moment(task.duedate);
    const diffDays = dueDate.diff(today, "days");

    let dueDateClass = "due-date";
    if (diffDays === 0) {
      dueDateClass = "due-date due-today";
    } else if (diffDays > 0 && diffDays <= 3) {
      dueDateClass = "due-date due-soon";
    }
    return (
      <div key={task.tasksid} className='accordion'>
        <div
          className='accordion-header'
          onClick={() => toggleAccordion(task.tasksid)}
        >
          <input
            type='checkbox'
            className='task-checkbox'
            checked={!!task.completed}
            onChange={(e) => {
              e.stopPropagation();
              handleCheckboxChange(task.tasksid, !task.completed);
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
          <p className='headerName'>{task.taskname}</p>
          <p className={dueDateClass}>
            Due Date: {moment(task.duedate).format("MM/DD/YYYY")}
          </p>
          <p className='accordion-arrow'>
            {activeTaskId === task.tasksid ? "▼" : "▶"}
          </p>
        </div>
        {activeTaskId === task.tasksid && (
          <div className='expansion'>
            <div className='descriptionHeader'>
              <div>
                <h4
                  style={{
                    textDecoration: "underline",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  Description
                </h4>
              </div>
              <div>
                <h4 className='apptDateDiv'>
                  <label className='apptDateLabel'>Appointment Date: </label>
                  {moment(task.apptdate).format("MM/DD/YYYY")}
                </h4>
              </div>
            </div>
            <p style={{ marginTop: "4px" }}>{task.taskdescription}</p>

            <button
              onClick={() => openModalWithTask(task)}
              className='update-button'
            >
              Update Task
            </button>
          </div>
        )}
      </div>
    );
  };



  return studentIdentification && tasks.length > 0 ? (
    <div className='entirePage'>
      <div className='studentPage'>
        <h1 className='studentTaskList'>Student Tasks</h1>
        <button className='sortButton' onClick={toggleSortMethod}>
          Sort by {sortMethod === "dueDate" ? "Appointment Date" : "Due Date"}
        </button>
        {sortedTasks.map(renderTask)}
        {isModalOpen && currentTask && (
          <UpdateModal
            taskId={currentTask.tasksid}
            initialData={currentTask}
            closeModal={closeModal}
            onTaskUpdate={updateTaskInList}
          />
        )}
      </div>
    </div>
  ) : (
    <> ... Loading </>
  );
};

export default TasksPage;
