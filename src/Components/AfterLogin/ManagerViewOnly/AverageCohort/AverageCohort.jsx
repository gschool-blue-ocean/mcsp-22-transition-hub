import React, { useEffect } from "react";
import { useState, useContext } from "react";
import SingleAverage from "./SingleAverage";
import "./averageCohort.css";
import CohortContext from "../../../Context/CohortContext";
import StudentContext from "../../../Context/StudentContext";
import LoadingAnimation from "../../../LoadingAnimation";

const AverageCohort = () => {
  const { average, getData } = useContext(CohortContext);
  const { tasks } = useContext(StudentContext);

  // const average = []
  useEffect(() => {
    getData();
  }, [tasks]);
  console.log(average)
  return average.length > 1 ? (
    <div className='average_cohort_outerContainer'>
      <div className='average_cohort_container'>
        <div className='average_cohort_title'>Task Progress By Cohort</div>
        {average.map((cohort, index) => (
          <SingleAverage cohort={cohort} key={index} id={index} />
        ))}
      </div>
    </div>
  ) : (
    <div className='average_cohort_container'>
      <LoadingAnimation />
    </div>
  );
};

export default AverageCohort;
