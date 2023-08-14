import './ManagerSideNav.css';
import React from 'react';
import { useState } from 'react';
import SidNavStudentCards from './SidNavStudentCards';

const ManagerSideNav = () => {

    const [cohortSelect, setCohortSelect] = useState({
        students: []
    });

    const handleChange = (e) => {
        const { value } = e.target;
        //Might have to add additional code depending on the fetch
            //The value in the students key needsto be an array in order for the student cards to populate
        const array = value.split(',')
        setCohortSelect({ ...cohortSelect, students: array });
    };

    /* ----- Temp Cohorts Object------- */
    const cohorts = [ 
        {name: "MSCP-20", students: ["bob0", "bobby0", "bobby0", "bobby0", "bobby0", "bobby0", "bobby0", "bobby0", "bobby0", "bobby0", "bobby0", "bobby0", "bobby0"]},
        {name: "MSCP-21", students: ["bob1", "bobby1"]},
        {name: "MSCP-22", students: ["bob2", "bobby2"]},
    ];

    return (
        <div className='managerSide_Bar_Container'>
            <select className='managerSide_Bar_Select' onChange={handleChange} >
                {cohorts.map((cohort, index) => (
                    <option value={cohort.students} key={index}>
                        {cohort.name}
                    </option>
                ))}
            </select>
            <div className='studentCardsContainer'>
                {cohortSelect.students.map( (student, index) => (
                    <SidNavStudentCards student={student} key={index} id={index}/>
                    ))}
            </div>
        </div>
    );
};


export default ManagerSideNav