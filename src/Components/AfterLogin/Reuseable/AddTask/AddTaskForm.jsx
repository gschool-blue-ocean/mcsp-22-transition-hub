import React, { useState, useContext } from "react";
import "./AddTaskForm.css";
import StudentContext from "/src/Components/Context/StudentContext";
const AddTaskForm = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    studentId,
    addTaskVisible,
    setAddTaskVisible,
  } = useContext(StudentContext);

  const [isFormVisible, setFormVisible] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleClose = () => {
    setAddTaskVisible(false);
  };

  return addTaskVisible ? (
    <div className="taskform-overlay">
      <div className="Add_Task_Form_Container">
        <form className="Add_Task_Form" onSubmit={handleSubmit}>
          <button
            className="exit_Add_Task_Form_Container"
            onClick={handleClose}
          >
            x
          </button>

          <div className="addtask-form-title">
            <h2 style={{ marginTop: "2rem", marginBottom: "0.75rem" }}>
              Add your task and submit!
            </h2>
          </div>

          <div className="Add_Task_Form_Input_Title">
            <label>Task Name:</label>
            <input
              type="text"
              placeholder=""
              name="taskName"
              onChange={handleInputChange}
              value={formData.taskName}
            />
          </div>

          <div className="Add_Task_Form_Input_Description">
            <label>Task Description:</label>
            <textarea
              type="text"
              placeholder=""
              name="taskDescription"
              onChange={handleInputChange}
              value={formData.taskDescription}
            />
          </div>

          <div className="AddTask_Form_Dates">
            <div className="AddTask_Date">
              <label htmlFor="dueDate">Due Date:</label>
              <input
                type="date"
                id="AddTask_Due_Date"
                name="dueDate"
                onChange={handleInputChange}
                value={formData.dueDate}
              />
            </div>

            <div className="AddTask_Date">
              <label htmlFor="apptDate">Appt Date:</label>
              <input
                type="date"
                id="AddTask_Appt_Date"
                name="apptDate"
                onChange={handleInputChange}
                value={formData.apptDate}
              />
            </div>
          </div>

          <button
            className="AddTask_Button"
            id="AddTask_Button_id"
            type="submit"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  ) : null;
};

export default AddTaskForm;
