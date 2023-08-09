import React, { useEffect, useState } from "react";
import c from "./App.module.css";
import axios from "axios";
import SignOn from "../LoginPage/SignOn";

const App = () => {
  // const [tasks, setTasks] = useState([]);

  // const getTasks = () => {
  //   axios.get("/api/tasks").then((res) => {
  //     setTasks(res.data);
  //   });
  // };

  // useEffect(getTasks, []);

  // const deleteTask = async (id) => {
  //   await axios.delete(`/api/tasks/${id}`);
  //   return getTasks();
  // };

  return (
    <>
      <SignOn />
    </>


  );
};

export default App;
