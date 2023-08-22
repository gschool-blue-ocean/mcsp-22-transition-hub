import React from "react";
import { useContext} from "react";
import AddTaskForm from "./AddTaskForm";
import './AddTask.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import StudentContext from "../../../Context/StudentContext";

const AddTask = () => {
    const {addTaskVisible, setAddTaskVisible} = useContext(StudentContext)

    const handleVisibility = () => setAddTaskVisible(!addTaskVisible);

    return (
        <>
            {/* <div className='AddTask_Circle' onClick={handleVisibility}>  
                <p className='AddTask_Circle_Plus'>+</p>
            </div>
            {visible ? <AddTaskForm handleVisibility={handleVisibility}/> : <></>} */}
            
            <div className='AddTask_Circle' onClick={handleVisibility}>  
                <FontAwesomeIcon icon={faCirclePlus} style={{color: "rgb(251, 140, 0)", height: '4.5rem', width: '4.5rem'}} />
            </div>
                {addTaskVisible ? <AddTaskForm handleVisibility={handleVisibility}/> : <></>}
        </>
    )
}
export default AddTask