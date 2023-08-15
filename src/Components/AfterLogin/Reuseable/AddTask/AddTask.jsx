import React from "react";
import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import './AddTask.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const AddTask = () => {
    const [visible, setVisible] = useState(false);

    const handleVisibility = () => setVisible(!visible);

    return (
        <>
            {/* <div className='AddTask_Circle' onClick={handleVisibility}>  
                <p className='AddTask_Circle_Plus'>+</p>
            </div>
            {visible ? <AddTaskForm handleVisibility={handleVisibility}/> : <></>} */}
            
            <div className='AddTask_Circle' onClick={handleVisibility}>  
                <FontAwesomeIcon icon={faCirclePlus} style={{color: "#fb8c50", height: '4.5rem', width: '4.5rem'}} />
            </div>
                {visible ? <AddTaskForm handleVisibility={handleVisibility}/> : <></>}
        </>
    )
}
export default AddTask