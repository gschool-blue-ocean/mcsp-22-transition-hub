import React from "react";
import { useState, useContext } from "react";
import SingleAverage from "./SingleAverage";
import './averageCohort.css'
import CohortContext from "../../../Context/CohortContext";

const AverageCohort = () => {
    const {average} = useContext(CohortContext)

    return (
        average.length > 1 ? (
        <div className="average_cohort_outerContainer">
            <div className='average_cohort_container'>
                <div className="average_cohort_title">Average Tasks Completed Per Cohort</div>
                    {average.map( (cohort, index) => (
                        <SingleAverage cohort={cohort} key={index} id={index}/>
                        ))}
            </div>
        </div>
        ) : <> </>
    );
}

export default AverageCohort
