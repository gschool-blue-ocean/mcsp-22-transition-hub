import React from "react";
import "./AddCohort.css";
import { useState, useContext } from "react";
import CohortContext from "../../Context/CohortContext";
import { formToJSON } from "axios";

const AddCohort = () => {
  const { postCohort, setCohortFormOpen, cohortFormOpen } =
    useContext(CohortContext);

  const [formData, setFormData] = useState({
    cohortName: "",
    startDate: "",
    endDate: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData);
    postCohort(formData);
    clearFormData(setFormData);
  };

  const clearFormData = (setData) => {
    const newFormData = {
      cohortName: "",
      startDate: "",
      endDate: "",
    };
    setData(newFormData);
  };

  return (
    <div className='addcohort-overlay'>
      <div className='AddCohort_Container'>
        <div className='exit-button-container'>
          <button
            className='AddCohort_Exit_Button'
            onClick={() => setCohortFormOpen(false)}
          >
            X
          </button>
        </div>
        <div className='cohort_form_container'>
          <form className='Add_Cohort_Form'>
            <div className='Cohort_Names_Container'>
              <label>Cohort Name:</label>
              <input
                type='text'
                placeholder=''
                name='cohortName'
                onChange={handleChange}
                value={formData.cohortName}
              ></input>
            </div>
            <div className='Cohort_Dates'>
              <label htmlFor='startDate'>Start Date:</label>
              <input
                type='date'
                id='Cohort_Start'
                name='startDate'
                onChange={handleChange}
                value={formData.startDate}
              />
            </div>
            <div className='Cohort_Dates'>
              <label htmlFor='endDate'>End Date:</label>
              <input
                type='date'
                id='Cohort_End'
                name='endDate'
                onChange={handleChange}
                value={formData.endDate}
              />
            </div>
          </form>
          <div>
            <button
              className='Add_Cohort'
              id='Add_Cohort_Button'
              onClick={handleClick}
            >
              Add Cohort
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCohort;
