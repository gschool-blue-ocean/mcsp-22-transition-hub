import React, { useState, useEffect, useContext } from 'react';
import './tasks.css';
import StudentContext from '../Context/StudentContext';
import moment from 'moment';
import UpdateModal from './UpdateModal';
const TasksPage = () => {


    const {handleCheckboxChange, toggleAccordion, tasks, activeTaskId, studentId} = useContext(StudentContext)

    const [isModalOpen, setModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const openModalWithTask = (task) => {
    const defaultTask = {
        taskname: "",
        taskdescription: "",
        duedate: "",
        apptdate: "",
        ...task
    };
    setCurrentTask(task);
    setModalOpen(true);
};


  const closeModal = () => {
    setModalOpen(false);
    setCurrentTask(null);
  };
    
    const renderTask = (task) => {

        const today = moment();
        const dueDate = moment(task.duedate);
        const diffDays = dueDate.diff(today, 'days');

        let dueDateClass = 'due-date';
        if (diffDays === 0) {
            dueDateClass = 'due-date due-today';
        } else if (diffDays > 0 && diffDays <= 3) {
            dueDateClass = 'due-date due-soon';
        }

        return (
        <div key={task.tasksid} className="accordion">
            <div className="accordion-header" onClick={() => toggleAccordion(task.tasksid)}>
                <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={!!task.completed}
                    onChange={(e) => {
                        e.stopPropagation(); 
                        handleCheckboxChange(task.tasksid, !task.completed);
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                />
                <p className="headerName">{task.taskname}</p> 
                <p className={dueDateClass}>
                    {moment(task.duedate).format('MM/DD/YYYY')}
                    </p>
                <p className="accordion-arrow">{activeTaskId === task.tasksid ? '▼' : '▶'}</p>
            </div>
            {activeTaskId === task.tasksid && (
                <div className="expansion">
                    <h4 style={{  textDecoration: 'underline', marginTop: '0px',marginBottom: '0px'}}>Description</h4>
                    <p style={{  marginTop: '4px'}}>{task.taskdescription}</p>
                    <button onClick={() => openModalWithTask(task)} className="update-button">Update Task</button>
                </div>
            )}
        </div>
    );
};
// console.log(studentId)
// console.log(tasks)
    return (
        studentId && (tasks.length > 1) ? (
            <div className="entirePage">
                <div className="studentPage">
                    <h1 className="studentTaskList">Student Tasks</h1>
                    {tasks.map(renderTask)}
                    {isModalOpen && currentTask && (
                        <UpdateModal
                            taskId={currentTask.tasksid}
                            initialData={currentTask}
                            closeModal={closeModal}
                        />
                    )}
                </div>
             </div>
        ) : <> ... Loading </>
    );
}

export default TasksPage;