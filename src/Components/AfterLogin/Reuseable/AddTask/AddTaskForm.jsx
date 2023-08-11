import React from "react";
import './AddTaskForm.css'
import { useState } from "react";

const AddTaskForm = ({handleClose}) => {
    const [formData, setFormData] = useState({
        taskName: "",
        taskDescription: "",
        dueDate: "",
        apptDate: "",
    });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


    return (
        <div className="Add_Task_Form_Container">
            <form className="Add_Task_Form">
            <button className="exit_Add_Task_Form_Container" onClick={handleClose}>X</button>
                <div className="Add_Task_Form_Input_Title">
                    <label>Task Name:</label>
                    <input type='text' placeholder=''
                    name="taskName"
                    onChange={handleChange}
                    value={formData.taskName}></input>
                </div>
                <div className="Add_Task_Form_Input_Description">
                    <label>Task Description</label>
                    <textarea type='text' placeholder=''
                    name="taskDescription"
                    onChange={handleChange}
                    value={formData.taskDescription}></textarea>
                </div>
                <div className="AddTask_Form_Dates">
                    <div className="AddTask_Date">
                        <label htmlFor="dueDate">Due date:</label>
                        <input type="date" id="AddTask_Due_Date" name="dueDate" onChange={handleChange}/>
                    </div>
                    <div className="AddTask_Date">
                        <label htmlFor="apptDate">Appointment date:</label>
                        <input type="date" id="AddTask_Appt_Date" name="apptDate" onChange={handleChange}/>
                    </div>
                </div>

                <button className="AddTask_Button" id="AddTask_Button_id">Add Task</button>
            </form>
        </div>
    )
}

export default AddTaskForm

/*
  taskName varchar,
  taskDescription text,
  dueDate varchar,
  apptDate varchar
*/