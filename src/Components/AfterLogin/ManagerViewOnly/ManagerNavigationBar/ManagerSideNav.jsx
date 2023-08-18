import './ManagerSideNav.css';
import React from 'react';
import { useState, useContext } from 'react';
import SidNavStudentCards from './SidNavStudentCards';
import CohortContext from '../../../Context/CohortContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddCohort from '../AddCohort';

const ManagerSideNav = () => {
    // const [cohortFormOpen, setCohortFormOpen] = useState(false);

    //Grab stuff from context
    const {displayedStudents, setCohort, cohortList, cohortFormOpen, setCohortFormOpen} = useContext(CohortContext)

    //Set cohort value for get request, takes the cohort id
    const handleChange = (e) => {
        const { value } = e.target;
        setCohort(value)    
    };

    return (
        <div className='managerSide_Bar_Container'>
            <div>
                <select className='managerSide_Bar_Select' onChange={handleChange} >
                        <option value ='0'>Select a Cohort</option>
                    {cohortList.map((cohort, index) => (
                        <option value={cohort.cohortsid} key={index}>
                            {cohort.cohortname}
                        </option>
                    ))}
                </select>
                <button className='addCohort_formOpenBtn' onClick={() => setCohortFormOpen(true)}>
                    <FontAwesomeIcon icon={faPlus} style={{color: "black",}} size='xl' />
                </button>
            </div>
            {displayedStudents.length > 0 ? 
            <div className='studentCardsContainer'>
                {displayedStudents.map((student, index) => (
                    <SidNavStudentCards student={student} key={index} id={index}/>
                    ))}
            </div> : <></> }

            {/* {cohortFormOpen && (
            <AddCohort 
            setCohortFormOpen={setCohortFormOpen}
            />
            )} */}
        </div>
    );
};


export default ManagerSideNav