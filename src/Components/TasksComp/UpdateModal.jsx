import React, { useState, useEffect } from 'react';
import moment from 'moment';
import "./UpdateModal.css"



const UpdateModal = ({ taskId, initialData, closeModal }) => {
  const [formData, setFormData] = useState(initialData || {
    taskname: '',
    taskdescription: '',
    duedate: '',
    apptdate: '',
  });

  useEffect(() => {
    console.log('Initial Data:', initialData);
    setFormData({
        taskname: initialData.taskname || '',
        taskdescription: initialData.taskdescription || '',
        duedate: moment(initialData.duedate).format('yyyy/MM/DD') || '',
        apptdate: moment(initialData.apptdate).format('yyyy/MM/DD') || '',
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
    console.log('Sending this data:', formData);

    // Send the PATCH request
    try {
      const response = await fetch(`http://localhost:8000/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Task updated successfully');
        window.location.reload();
      } else {
        alert('Failed to update task');
      }
    } catch (err) {
      alert('Failed to update task');
      console.error(err);
    }

    // Close the modal after submitting
    closeModal();
  };

  return (
    <div className="modal-container">
        <div className="update-modal">
            <button className="closeButton" onClick={closeModal}>X</button>
             <form onSubmit={handleSubmit}>
            <div className="taskTitleDiv">
            <div className="nameTitle">
              <label>
                  Task Name:
                </label>
                  <input type="text" name="taskname" value={formData.taskname} onChange={handleChange} />
              </div>
              </div>
              <div className="taskDescriptionDiv">
              <div className="task-description">
             <label>
                 Task Description:
              </label>
                 <textarea name="taskdescription" value={formData.taskdescription} onChange={handleChange} />
              </div>
              </div>
              <div className="warningDiv">
                <div className="warning">
                  <label>
                    MUST ENTER DATES BEFORE SUBMITTING FORM
                  </label>
                </div>
                </div>
              <div className="dateDiv">
                <div className="dueDateDiv"> 
                <label>
                 Due Date:
                </label>
                <input type="date" name="duedate" value={formData.duedate} onChange={handleChange} />
                </div>
                <div className="dueDateDiv">
                <label>
                Appointment Date:
                </label>
                <input type="date" name="apptdate" value={formData.apptdate} onChange={handleChange} />
                </div>
              </div>
                <button className="submitButton" type="submit">Submit</button>
            </form>
            </div>
            </div>
        );
        }

export default UpdateModal;
