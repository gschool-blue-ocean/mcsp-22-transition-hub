import React from "react";
import Header from "../AfterLogin/Reuseable/Header";
import { CohortProvider } from "../Context/CohortContext";
import ManagerSideNav from "../AfterLogin/ManagerViewOnly/ManagerNavigationBar/ManagerSideNav";
import ManagerContent from "../AfterLogin/ManagerViewOnly/ManagerContent"
import AddCohort from "../AfterLogin/ManagerViewOnly/AddCohort"

const Manager = () => {
  return (
            <>
                <Header />
                <div className='app_BG'>
                  <div style={{width: "300px", height: "90vh"}}></div>
                  <CohortProvider>
                      <ManagerSideNav />
                      <ManagerContent />
                  {/* <AddCohort /> */}
                </CohortProvider>
                    </div>
            </>
  );
}

export default Manager;
