import Header from "../AfterLogin/Reuseable/Header";
import { useContext } from "react";
import CohortContext from "../Context/CohortContext";
import ManagerContent from "../AfterLogin/ManagerViewOnly/ManagerContent";
import AddCohort from "../AfterLogin/ManagerViewOnly/AddCohort";


const Manager = () => {
  const { setCohortFormOpen, cohortFormOpen } = useContext(CohortContext);
  const role = localStorage.getItem("role")
  if(role === "manager") {
    return (
      <>
        <Header />
        <ManagerContent />
        {cohortFormOpen && <AddCohort setCohortFormOpen={false} />}
      </>
    );
  }
  else {
    return (
      <>
      Not authorized
      </>
    )

  }
}


export default Manager;
