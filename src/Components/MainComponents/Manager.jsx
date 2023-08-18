
import Header from "../AfterLogin/Reuseable/Header";
import { useContext } from "react";
import CohortContext from "../Context/CohortContext";
import ManagerSideNav from "../AfterLogin/ManagerViewOnly/ManagerNavigationBar/ManagerSideNav";
import ManagerContent from "../AfterLogin/ManagerViewOnly/ManagerContent"
import AddCohort from "../AfterLogin/ManagerViewOnly/AddCohort"

const Manager = () => {

const {setCohortFormOpen, cohortFormOpen} = useContext(CohortContext)

  return (
            <>
                <Header />
                  <div className='app_BG'>
                    <div style={{width: "300px", height: "90vh"}}></div>
                    <ManagerSideNav />
                    <ManagerContent />
                    {cohortFormOpen && (
                     <AddCohort 
                      setCohortFormOpen={setCohortFormOpen}
                     />
                    )} 
                 </div>
            </>
  );
}

export default Manager;
