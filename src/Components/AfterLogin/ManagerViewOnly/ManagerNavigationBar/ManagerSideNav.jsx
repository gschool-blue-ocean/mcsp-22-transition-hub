import './ManagerSideNav.css';
import React from 'react';
import { useState, useContext } from 'react';
import SidNavStudentCards from './SidNavStudentCards';
import CohortContext from '../../../Context/CohortContext';

const ManagerSideNav = () => {
    //Grab stuff from context
    const {displayedStudents, setCohort, cohortList} = useContext(CohortContext)

    //Set cohort value for get request, takes the cohort id
    const handleChange = (e) => {
        const { value } = e.target;
        setCohort(value)    
    };

    return (
        <div className='managerSide_Bar_Container'>
            <select className='managerSide_Bar_Select' onChange={handleChange} >
                <option disabled selected value> -- select an option -- </option>
                {cohortList.map((cohort, index) => (
                    <option value={cohort.cohortsid} key={index}>
                        {cohort.cohortname}
                    </option>
                ))}
            </select>
            {displayedStudents.length > 0 ? 
            <div className='studentCardsContainer'>
                {displayedStudents.map((student, index) => (
                    <SidNavStudentCards student={student} key={index} id={index}/>
                    ))}
            </div> : <></> }
        </div>
    );
};


export default ManagerSideNav