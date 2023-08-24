import Header from "../AfterLogin/Reuseable/Header";
import StudentInfoBar from "../AfterLogin/Reuseable/StudentInfoBar";
import AddTask from "../AfterLogin/Reuseable/AddTask/AddTask";
import TasksPage from "../TasksComp/TasksPage";
import { useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const Student = () => {
  const role = localStorage.getItem("role")
  const {studentIdentification} = useParams()
  const currentUser = localStorage.getItem("id")
if (role === "student" && currentUser === studentIdentification ){
  return (
    <>
      <Header />
      <StudentInfoBar />
      <AddTask />
      <TasksPage />   
      <ToastContainer />
    </>
);
} else {
  return (
      <>
      Not authorized to view page
      </>
  ) 
}

}

export default Student;
