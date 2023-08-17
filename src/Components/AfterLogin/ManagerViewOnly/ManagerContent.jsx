import React from "react";
import AverageCohort from "../ManagerViewOnly/AverageCohort/AverageCohort"
import StudentList from "../ManagerViewOnly/StudentList/StudentList";
import './ManagerContent.css'

const ManagerContent = () => {
    return (
        <div className="ManagerContent_Container">
                <AverageCohort /> 
                <StudentList />
        </div>
    )
}

export default ManagerContent