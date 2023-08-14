import React from 'react';
import Tasks from './Tasks';
import './tasks.css';


const AllTasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.tasksId} task={task} />
      ))}
    </div>
  );
}

export default AllTasks;
