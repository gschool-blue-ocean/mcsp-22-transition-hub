import React from "react";
import { useState, useContext } from "react";
import SingleAverage from "./SingleAverage";
import './averageCohort.css'
import CohortContext from "../../../Context/cohortContext";

const AverageCohort = () => {
    const {cohortTaskList} = useContext(CohortContext)
    console.log(cohortTaskList)
let average =[
    {name: "mcsp-20", average: 50},
    {name: "mcsp-21", average: 75},
    {name: "mcsp-22", average: 10},
    ] 

    return (
        <div className='average_cohort_container'>
            <div className="average_cohort_title">Average Tasks Completed Per Cohort</div>
                {average.map( (cohort, index) => (
                    <SingleAverage cohort={cohort} key={index} id={index}/>
                    ))}
        </div>
    );
}

export default AverageCohort