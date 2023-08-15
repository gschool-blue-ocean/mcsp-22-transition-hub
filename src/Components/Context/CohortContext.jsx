import React, { useEffect } from 'react';
import {useState, createContext} from 'react'

const CohortContext = createContext()

export const CohortProvider = ({children}) => {
    const url = "http://localhost:8000"

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




    return <CohortContext.Provider value={{
        displayedStudents,
        setCohort,
        cohortList,
        cohortTaskList
    }}>
        {children}
        </CohortContext.Provider>
}

export default CohortContext

//  /manager/:cohort/students