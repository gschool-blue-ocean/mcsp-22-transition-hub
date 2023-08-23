import React, { useEffect, useState } from "react";
import AverageCohort from "../ManagerViewOnly/AverageCohort/AverageCohort";
import StudentList from "../ManagerViewOnly/StudentList/StudentList";
import "./ManagerContent.css";
import { useContext } from "react";
import CohortContext from "../../Context/CohortContext";
import { StudentProvider } from "../../Context/StudentContext";
import StudentInManager from "./StudentInManager";
import LoadingAnimation from "../../LoadingAnimation";

const ManagerContent = () => {
  const { currentManagerContent, isLoading, setIsLoading } =
    useContext(CohortContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>

        <div className='app_BG'>
          {/* {isLoading ? (
            <LoadingAnimation />
          ) : currentManagerContent ? ( */}
            <div className='ManagerContent_Container'>
              <AverageCohort />
              <StudentList />
            </div>
          {/* ) : (
            <StudentInManager />
          )} */}
        </div>
    </>
  );
};

export default ManagerContent;
