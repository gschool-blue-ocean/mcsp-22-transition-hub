import Header from "../AfterLogin/Reuseable/Header";
import { useContext } from "react";
import CohortContext from "../Context/CohortContext";
import ManagerSideNav from "../AfterLogin/ManagerViewOnly/ManagerNavigationBar/ManagerSideNav";
import ManagerContent from "../AfterLogin/ManagerViewOnly/ManagerContent";
import AddCohort from "../AfterLogin/ManagerViewOnly/AddCohort";
import LoadingAnimation from "../LoadingAnimation";

const Manager = () => {
  const { setCohortFormOpen, cohortFormOpen } = useContext(CohortContext);

  return (
    <>
      <Header />
      <ManagerContent />
      {cohortFormOpen && <AddCohort setCohortFormOpen={false} />}
    </>
  );
};

export default Manager;
