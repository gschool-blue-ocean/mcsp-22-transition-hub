import React, { useEffect } from 'react';
import {useState, createContext} from 'react'

const CohortContext = createContext()

export const CohortProvider = ({children}) => {
    const url = "http://localhost:3000"

    /* ------------------  To Grab Students First and Last Name By Cohort ------------------- */
    const [cohort, setCohort] = useState(0) //Current displayed Cohort
    const [displayedStudents, setDisplayedStudents] = useState([]) //Current students displayed
    
    useEffect(() =>{
        const getData = async () => {
        try{
                const result = await fetch(`${url}/manager/${cohort}/students`)
                const data = await result.json()
                setDisplayedStudents([...data])
              }
         catch (err){
            setDisplayedStudents([])
            console.log(err.message)
            }
        }
        getData()
      }, [cohort])

/* ---------------------Everything from Cohort Table ------------------------- */
     const [cohortList, setCohortList] = useState([]) 
      useEffect(() =>{
        const getData = async () => {
        try{
                const result = await fetch(`${url}/manager/cohorts`)
                const data = await result.json()
                setCohortList([...data])
              }
         catch (err){
            console.log(err.message)
            }
        }
        getData()
      }, [])

/* ---------------------All Tasks with Cohortid------------------------- */
      const [cohortTaskList, setCohortTaskList] = useState([]) 
      const [average, setAverage] = useState({})
      useEffect(() =>{
        const getData = async () => {
        try{
                const result = await fetch(`${url}/manager/tasks/all`)
                const data = await result.json()
                setCohortTaskList([...data])
              }
         catch (err){
            console.log(err.message)
            }
        }
        getData()

      }, [])

      useEffect( () =>{
        let tempArray = createTasksTotalArray(cohortTaskList)
        setAverage(tempArray)
      }, [cohortTaskList])


    return <CohortContext.Provider value={{
        displayedStudents,
        setCohort,
        cohortList,
        cohortTaskList,
        average
    }}>
        {children}
        </CohortContext.Provider>
}

export default CohortContext


//Generates a data object with aggregated information for each cohort
function createTasksTotalArray(tasks) {
    const cohorts = [];

    if (tasks) {
        tasks.forEach((task) => {
            const cohortIndex = cohorts.findIndex(cohort => cohort.cohortsid === task.cohortsid);
            const completed = checkBoolean(task.completed);

            if (cohortIndex !== -1) {
                cohorts[cohortIndex].totalComplete += completed;
                cohorts[cohortIndex].totalTask++;
                cohorts[cohortIndex].average = cohorts[cohortIndex].totalComplete / cohorts[cohortIndex].totalTask;
            } else {
                const newCohort = {
                    cohortsid: task.cohortsid,
                    totalComplete: completed,
                    totalTask: 1,
                    average: completed ? 1 : 0,
                };
                cohorts.push(newCohort);
            }
        });
    }
    return cohorts;
}

//Takes boolean and returns numbers 
function checkBoolean(value) {
  return value ? 1 : 0;
}

function calculateStudentProgress(studentTasks) {
  let totalTasks = studentTasks.length;
  let completedTasks = studentTasks.filter(task => task.completed).length;
  
  if (totalTasks === 0) {
      return 0;
  }
  
  return completedTasks / totalTasks;
}

// ------------------------- Manager main middle student list after clicking a cohort ----------------
