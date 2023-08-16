import React from "react";
import Header from "../AfterLogin/Reuseable/Header";
import { CohortProvider } from "../Context/CohortContext";
import ManagerSideNav from "../AfterLogin/ManagerViewOnly/ManagerNavigationBar/ManagerSideNav";
import AverageCohort from "../AfterLogin/ManagerViewOnly/AverageCohort/AverageCohort";
import StudentList from "../AfterLogin/ManagerViewOnly/StudentList/StudentList";

const Manager = () => {
  return (
            <>
                <Header />
                <CohortProvider>
                <ManagerSideNav />
                <AverageCohort /> 
                <StudentList />
                {/* <AddCohort /> */}
                </CohortProvider>
            </>
  );
}

export default Manager;
