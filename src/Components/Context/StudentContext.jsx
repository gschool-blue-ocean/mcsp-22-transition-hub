import { useState, createContext, useEffect, useContext } from "react";
import UrlContext from "./UrlContext";
import { toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [activeTaskId, setActiveTaskId] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [addTaskVisible, setAddTaskVisible] = useState(false);
  const { url } = useContext(UrlContext);
  const [formData, setFormData] = useState({
    taskName: "",
    taskDescription: "",
    dueDate: "",
    apptDate: "",
  });

  const grabStudentId = async (url, username) => {
    try {
      const response = await fetch(`${url}/user/${username}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      if (data[0]) {
        setStudentId(data[0].studentsid);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postDefaultTasks = async (url, studentId, ets) => {
        const defaultTasks = [
            {
                studentsId: studentId,
                taskName: "Request Seperation Orders", 
                taskDescription: "Servicemember (SM) must request orders to begin their separation from their personnel office.", 
                dueDate: ets, 
                apptDate: ets,
                completed: false
            }, 
            {
                studentsId: studentId,
                taskName: "Apply For Leave", 
                taskDescription: "If necessary, servicemember (SM) must file a request leave.", 
                dueDate: ets, 
                apptDate: ets,
                completed: false
            }, 
            {
                studentsId: studentId,
                taskName: "Checklist Pick Up", 
                taskDescription: "SM must pick up their out processing checklist, which lays out all of the tasks they need to complete, typically within 30 days.", 
                dueDate: ets, 
                apptDate: ets,
                completed: false
            }, 
            {
                studentsId: studentId,
                taskName: "Request Seperation Orders", 
                taskDescription: "Servicemember (SM) must request orders to begin their separation from their personnel office.", 
                dueDate: ets, 
                apptDate: ets,
                completed: false
            }, 
            {
                studentsId: studentId,
                taskName: "Personnel Clear", 
                taskDescription: "SM reports to their HR department to clear HR-related issues.", 
                dueDate: ets, 
                apptDate: ets,
                completed: false
            }, 
            {
                studentsId: studentId,
                taskName: "Finance Clear", 
                taskDescription: "SM reports to finance office to resolve leave and pay issues.", 
                dueDate: ets, 
                apptDate: ets,
                completed: false
            }, 
            {
                studentsId: studentId,
                taskName: "Security Clearance Read", 
                taskDescription: "SM reports to security office to turn in any sensitive documentation or assets and have expectations of sensitive information maintenance communicated to them.", 
                dueDate: ets, 
                apptDate: ets,
                completed: false
            }, 
            {
                studentsId: studentId,
                taskName: "Medical Checkout", 
                taskDescription: "SM reports to medical staff to clear medical status and move records to new region where their home of record will be.", 
                dueDate: ets, 
                apptDate: ets,
                completed: false
            }, 
            {
                studentsId: studentId,
                taskName: "Equipment Turn In", 
                taskDescription: "SM reports to their quartermaster to return military issued gear.", 
                dueDate: ets, 
                apptDate: ets,
                completed: false
            }, 
            {
                studentsId: studentId,
                taskName: "Unit Clear", 
                taskDescription: "SM ensures all tasks are complete to standard with their unit leadership.", 
                dueDate: ets, 
                apptDate: ets,
                completed: false
            }, 
            {
                studentsId: studentId,
                taskName: "Final Out", 
                taskDescription: "Once SM has completed their checklist, they must return it before the deadline to their unit.", 
                dueDate: ets, 
                apptDate: ets,
                completed: false
            }
        ]

        const fetchPromises = defaultTasks.map(async (task) => {
            try {
                const response = await fetch(`${url}/tasks`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        studentsId: studentId,
                        taskName: task.taskName,
                        taskDescription: task.taskDescription,
                        dueDate: ets,
                        apptDate: ets,
                        completed: task.completed
                    }),
                });
    
            } catch (error) {
                console.log(error);
            }
        });
        await Promise.all(fetchPromises);
    };



  const handleChange = (name, value) => {
    if ((name === "dueDate" || name === "apptDate") && value) {
      const datePattern = /^\d{4}-\d{2}-\d{2}$/;
      if (!datePattern.test(value)) {
        toast.error("The date fields need to be in YYYY-MM-DD format");
        return;
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log("handleSubmit called");
    e.preventDefault();

    const newTask = {
      studentsId: studentId,
      ...formData,
      completed: false,
    };
    try {
      const response = await fetch(`${url}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        toast.success("Task added successfully");
        const data = await response.json();
        setTasks((prevTasks) => [...prevTasks, data]);
        setAddTaskVisible(false);
        setFormData({
          taskName: "",
          taskDescription: "",
          dueDate: "",
          apptDate: "",
        });
      } else {
        const data = await response.json();
        toast.error("Failed to add task: " + data.message);
      }
    } catch (err) {
      toast.error("Failed to add task");
      console.error(err);
    }
  };

  const handleCheckboxChange = async (taskId, newCompletedStatus) => {
    try {
      const response = await fetch(`${url}/tasks/${taskId}/complete`, {
        method: "PATCH",
      });
      if (!response.ok)
        throw new Error("Failed to update task completion status");

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.tasksid === taskId
            ? { ...task, completed: newCompletedStatus }
            : task
        )
      );
    } catch (error) {
      console.error(
        "There was a problem updating the task completion status:",
        error
      );
    }
  };

  const toggleAccordion = (taskId) => {
    setActiveTaskId((prevId) => (prevId === taskId ? null : taskId));
  };

  return (
    <StudentContext.Provider
      value={{
        handleCheckboxChange,
        toggleAccordion,
        tasks,
        setTasks,
        activeTaskId,
        setStudentId,
        studentId,
        formData,
        handleChange,
        handleSubmit,
        grabStudentId,
        addTaskVisible,
        setAddTaskVisible,
        postDefaultTasks,
        // fetchTasks
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;


