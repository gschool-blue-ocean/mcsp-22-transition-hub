import React, { useState, useEffect } from 'react';
import './tasks.css';

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [activeTaskId, setActiveTaskId] = useState(null);
    const [completedTasks, setCompletedTasks] = useState({});

    useEffect(() => {
        const savedTasks = localStorage.getItem('completedTasks');
        if (savedTasks) {
            setCompletedTasks(JSON.parse(savedTasks));
        }
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await fetch("http://localhost:3000/tasks/1");
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            setTasks(null);
        }
    };

    const toggleAccordion = (taskId) => {
        setActiveTaskId(prevId => prevId === taskId ? null : taskId);
    };

    const handleCheckboxChange = (taskId) => {
        setCompletedTasks((prevCompletedTasks) => {
            const updatedTasks = {
                ...prevCompletedTasks,
                [taskId]: !prevCompletedTasks[taskId]
            };
    
            localStorage.setItem('completedTasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    };

    const renderTask = (task) => (
        <div key={task.tasksid} className="accordion">
            <div className="accordion-header" onClick={() => toggleAccordion(task.tasksid)}>
                <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={!!completedTasks[task.tasksid]}
                    onClick={(e) => {
                        handleCheckboxChange(task.tasksid);
                        e.stopPropagation(); 
                    }}
                />
                {task.taskname} 
                <span className="due-date">{task.duedate}</span>
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

    return (
        <div className="entirePage">
            <div className="studentPage">
                <h1 className="studentTaskList">Student Tasks</h1>
                {tasks.map(renderTask)}
            </div>
        </div>
    );
}

export default TasksPage;
