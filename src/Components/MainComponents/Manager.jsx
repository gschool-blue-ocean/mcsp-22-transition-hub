import React from "react";
import Header from "../AfterLogin/Reuseable/Header";
import { CohortProvider } from "../Context/CohortContext";
import ManagerSideNav from "../AfterLogin/ManagerViewOnly/ManagerNavigationBar/ManagerSideNav";
import ManagerContent from "../AfterLogin/ManagerViewOnly/ManagerContent"


const Manager = () => {
  return (
            <>
                <Header />
                  <CohortProvider>
                  <ManagerSideNav />
                  <ManagerContent />
                  {/* <AddCohort /> */}
                </CohortProvider>
            </>
  );
}

export default Manager;
