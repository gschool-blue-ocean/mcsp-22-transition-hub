import StudentInfoBar from "../Reuseable/StudentInfoBar";
import AddTask from "../Reuseable/AddTask/AddTask";
import TasksPage from "../../TasksComp/TasksPage";
import BackButton from "./BackButton";
import StudentContext from "../../Context/StudentContext";
import { useContext } from "react";
import LoadingAnimation from "../../LoadingAnimation";
import Header from "../Reuseable/Header";
import { useParams } from "react-router-dom";

const StudentInManager = () => {
  const role = localStorage.getItem("role")
  if(role === "manager") {
    return (
      <>
          <Header />
          <BackButton />
          <StudentInfoBar />
          <AddTask />
          <TasksPage />
      </>
    ) 
  } else{
    <>
    Not authorized to view page
    </>
  }

};

export default StudentInManager;
