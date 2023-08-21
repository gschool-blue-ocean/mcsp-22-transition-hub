import React from "react";
import AverageCohort from "../ManagerViewOnly/AverageCohort/AverageCohort"
import StudentList from "../ManagerViewOnly/StudentList/StudentList";
import './ManagerContent.css'
import { useContext } from "react";
import CohortContext from "../../Context/CohortContext";
import { StudentProvider } from "../../Context/StudentContext";
import StudentInManager from "./StudentInManager";

const ManagerContent = () => {
const {currentManagerContent} = useContext(CohortContext)


return (
    <StudentProvider> 
      {currentManagerContent ? (
        <div className='app_BG'>
          <div className="ManagerContent_Container">
            <AverageCohort /> 
            <StudentList />
          </div>
        </div>
      ) : (
        <>
            <StudentInManager />
        </>
      )}
    </StudentProvider>
  );
}

export default ManagerContent