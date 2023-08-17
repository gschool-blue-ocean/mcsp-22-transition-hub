import React, { useState, useEffect } from 'react';
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
        duedate: initialData.duedate || '',
        apptdate: initialData.apptdate || '',
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
              <label>
                  Task Name:
                  <input type="text" name="taskName" value={formData.taskname} onChange={handleChange} />
                </label>
             <label>
                 Task Description:
                 <textarea name="taskDescription" value={formData.taskdescription} onChange={handleChange} />
              </label>
                <label>
                 Due Date:
                <input type="date" name="dueDate" value={formData.duedate} onChange={handleChange} />
                </label>
                <label>
                Appointment Date:
                <input type="date" name="apptDate" value={formData.apptdate} onChange={handleChange} />
                </label>
                <button className="submitButton" type="submit">Submit</button>
            </form>
            </div>
            </div>
        );
        }

export default UpdateModal;
