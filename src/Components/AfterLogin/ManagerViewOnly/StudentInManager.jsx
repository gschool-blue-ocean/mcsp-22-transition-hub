import StudentInfoBar from "../Reuseable/StudentInfoBar";
import AddTask from "../Reuseable/AddTask/AddTask";
import TasksPage from "../../TasksComp/TasksPage";
import BackButton from "./BackButton";
import StudentContext from "../../Context/StudentContext";
import { useContext } from "react";
import LoadingAnimation from "../../LoadingAnimation";

const StudentInManager = () => {
  const { studentId } = useContext(StudentContext);

  return studentId ? (
    <>
      <BackButton />
      <StudentInfoBar />
      <AddTask />
      <TasksPage />
    </>
  ) : (
    <></>
  );
};

export default StudentInManager;
