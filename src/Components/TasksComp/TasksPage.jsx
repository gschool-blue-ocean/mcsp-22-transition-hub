import React, { useState, useEffect, useContext } from 'react';
import './tasks.css';
import StudentContext from '../Context/StudentContext';
import moment from 'moment';

const TasksPage = () => {


    const {handleCheckboxChange, toggleAccordion, tasks, activeTaskId, studentId} = useContext(StudentContext)

    
    const renderTask = (task) => (
        <div key={task.tasksid} className="accordion">
            <div className="accordion-header" onClick={() => toggleAccordion(task.tasksid)}>
                <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={!!task.completed}
                    onClick={(e) => {
                        handleCheckboxChange(task.tasksid, task.completed);
                        e.stopPropagation(); 
                    }}
                />
                {task.taskname} 
                <span className="due-date">{moment(task.duedate).format('MM/DD/YYYY')}</span>
                <span className="accordion-arrow">{activeTaskId === task.tasksid ? '▼' : '▶'}</span>
            </div>
            {activeTaskId === task.tasksid && (
                <div className="expansion">
                    <h4>Description</h4>
                    <p>{task.taskdescription}</p>
                </div>
            )}
        </div>
    );
// console.log(studentId)
// console.log(tasks)
    return (
        studentId && (tasks.length > 1) ? (
            <div className="entirePage">
                <div className="studentPage">
                    <h1 className="studentTaskList">Student Tasks</h1>
                    {tasks.map(renderTask)}
                </div>
             </div>
        ) : <> ... Loading </>
    );
}

export default TasksPage;
