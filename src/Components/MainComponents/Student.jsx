import React from "react";
import Header from "../AfterLogin/Reuseable/Header";
import StudentInfoBar from "../AfterLogin/Reuseable/StudentInfoBar";
import AddTask from "../AfterLogin/Reuseable/AddTask/AddTask";
import TasksPage from "../TasksComp/TasksPage";

const Student = () => {

  return (
            <>
              <Header />
              <StudentInfoBar />
              <AddTask />
              <TasksPage />   
            </>
  );
}

export default Student;
