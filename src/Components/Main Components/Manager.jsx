import React from "react";
import Header from "../AfterLogin/Reuseable/Header";
import { CohortProvider } from "../Context/CohortContext";
import ManagerSideNav from "../AfterLogin/ManagerViewOnly/ManagerNavigationBar/ManagerSideNav";
import AverageCohort from "../AfterLogin/ManagerViewOnly/AverageCohort/AverageCohort";

const Manager = () => {
  return (
            <>
                <Header />
                <CohortProvider>
                <ManagerSideNav />
                <AverageCohort /> 
                {/* <AddCohort /> */}
                </CohortProvider>
            </>
  );
}

export default Manager;
