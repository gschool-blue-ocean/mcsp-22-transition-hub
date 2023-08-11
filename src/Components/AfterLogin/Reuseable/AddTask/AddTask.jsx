import React from "react";
import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import './AddTask.css'


const AddTask = () => {
    const [visible, setVisible] = useState(false);

    const handleVisibility = () => setVisible(!visible);

    return (
        <>
            <div className='AddTask_Circle' onClick={handleVisibility}>  
                <p className='AddTask_Circle_Plus'>+</p>
            </div>
            {visible ? <AddTaskForm handleVisibility={handleVisibility}/> : <></>}
        </>
    )
}
export default AddTask