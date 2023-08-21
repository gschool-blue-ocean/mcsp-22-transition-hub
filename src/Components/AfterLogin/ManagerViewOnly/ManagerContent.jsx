import React from "react";
import AverageCohort from "../ManagerViewOnly/AverageCohort/AverageCohort"
import StudentList from "../ManagerViewOnly/StudentList/StudentList";
import './ManagerContent.css'
import { useContext } from "react";
import CohortContext from "../../Context/CohortContext";
import TasksPage from "../../TasksComp/TasksPage";
import BackButton from "./ManagerNavigationBar/BackButton";

const ManagerContent = () => {
const {currentManagerContent} = useContext(CohortContext)
console.log(currentManagerContent)
    return (
        <div className="ManagerContent_Container">
            {currentManagerContent ? 
            <>
                <AverageCohort /> 
                <StudentList />
            </> : <>
                <BackButton />
                {/* <TasksPage /> */}
            </>

            }   

        </div>
    )
}

export default ManagerContent