import React from "react";
import Header from "../AfterLogin/Reuseable/Header";
import { StudentProvider } from "../Context/StudentContext";
import StudentInfoBar from "../AfterLogin/Reuseable/StudentInfoBar";
import AddTask from "../AfterLogin/Reuseable/AddTask/AddTask";
import TasksPage from "../TasksComp/TasksPage";

const Student = () => {

  return (
            <>
                <Header />
                <StudentProvider>
                    <StudentInfoBar />
                    <AddTask />
                    <TasksPage />
                </StudentProvider>     
            </>
  );
}

export default Student;
