import React from "react";
import AverageCohort from "../ManagerViewOnly/AverageCohort/AverageCohort"
import StudentList from "../ManagerViewOnly/StudentList/StudentList";
import './ManagerContent.css'
import { useContext } from "react";
import CohortContext from "../../Context/CohortContext";
import BackButton from "./BackButton";
import { StudentProvider } from "../../Context/StudentContext";
import StudentInfoBar from "../Reuseable/StudentInfoBar";
import AddTask from "../Reuseable/AddTask/AddTask";
import TasksPage from "../../TasksComp/TasksPage";

const ManagerContent = () => {
const {currentManagerContent} = useContext(CohortContext)


    return (

            currentManagerContent ? 
            <div className='app_BG'>
                <div className="ManagerContent_Container">
                    <StudentProvider> 
                        <AverageCohort /> 
                        <StudentList />
                    </StudentProvider>
                    </div>
                </div> : <>
                <BackButton />
                <StudentProvider>
                    <StudentInfoBar />
                    <AddTask />
                    <TasksPage />
                </StudentProvider>   
            </>

               


    )
}

export default ManagerContent