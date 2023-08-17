import React, { useState, useEffect, useContext } from 'react';
import './tasks.css';
import StudentContext from '../Context/StudentContext';
import moment from 'moment';
const TasksPage = () => {


    const {handleCheckboxChange, toggleAccordion, tasks, activeTaskId, studentId} = useContext(StudentContext)

    
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
                    <h4>Description</h4>
                    <p>{task.taskdescription}</p>
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
                </div>
             </div>
        ) : <> ... Loading </>
    );
}

export default TasksPage;
