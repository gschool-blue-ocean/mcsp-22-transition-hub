import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./UpdateModal.css";
import UrlContext from "../Context/UrlContext";
// toast.configure();

const UpdateModal = ({ taskId, initialData, closeModal, onTaskUpdate }) => {
  const { url } = useContext(UrlContext);
  const [formData, setFormData] = useState(
    initialData || {
      taskname: "",
      taskdescription: "",
      duedate: "",
      apptdate: "",
    }
  );

  useEffect(() => {
    setFormData({
      taskname: initialData.taskname || "",
      taskdescription: initialData.taskdescription || "",
      duedate: moment(initialData.duedate).format("yyyy-MM-DD") || "",
      apptdate: moment(initialData.apptdate).format("yyyy-MM-DD") || "",
    });
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Task updated successfully");
        const updatedTask = await response.json();

        onTaskUpdate(updatedTask);
        closeModal();
      } else {
        toast.error("Failed to update task");
      }
    } catch (err) {
      toast.error("Failed to update task");

      console.error(err);
    }
  };

  return (
    <div className="edittask-overlay">
      <div className="modal-container">
        <form className="edittask-form" onSubmit={handleSubmit}>
          <div className="edittask-form-title">
            <h2>Edit and Submit!</h2>
          </div>
          <div className="taskTitleDiv">
            <div className="nameTitle">
              <label>Task Name:</label>
              <input
                type="text"
                name="taskname"
                value={formData.taskname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="taskDescriptionDiv">
            <div className="task-description">
              <label>Task Description:</label>
              <textarea
                name="taskdescription"
                value={formData.taskdescription}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="dateDiv">
            <div className="dueDateDiv">
              <label>Due Date:</label>
              <input
                type="date"
                name="duedate"
                value={formData.duedate}
                onChange={handleChange}
              />
            </div>
            <div className="dueDateDiv">
              <label>Appointment Date:</label>
              <input
                type="date"
                name="apptdate"
                value={formData.apptdate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="warningDiv">
            <div className="warning">
              <label>* Must enter dates before submission</label>
            </div>
          </div>
          <div>
            <button className="submitButton" type="submit">
              Update Task
            </button>
          </div>
        </form>
        <button className="closeButton" onClick={closeModal}>
          x
        </button>
      </div>
    </div>
  );
};

export default UpdateModal;
