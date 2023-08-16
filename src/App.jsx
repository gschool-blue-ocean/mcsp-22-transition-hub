import React, { useEffect, useState } from "react";
import './App.css'
import AccountServices from "./Components/LoginPage/AccountServices";
import Header from "./Components/AfterLogin/Reuseable/Header";
import { AccountProvider } from "./Components/Context/AccountServicesContext";
import { CohortProvider } from "./Components/Context/CohortContext";
import { StudentProvider } from "./Components/Context/StudentContext";
import StudentInfoBar from "./Components/AfterLogin/Reuseable/StudentInfoBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTask from "./Components/AfterLogin/Reuseable/AddTask/AddTask";
import TasksPage from "./Components/TasksComp/TasksPage";
import ManagerSideNav from "./Components/AfterLogin/ManagerViewOnly/ManagerNavigationBar/ManagerSideNav";
import AverageCohort from "./Components/AfterLogin/ManagerViewOnly/AverageCohort/AverageCohort";
import AddCohort from "./Components/AfterLogin/ManagerViewOnly/AddCohort";


function App() {
  // const checkAuth = async () => {
  //   try {
  //     const res = await fetch("http://localhost:4500/authentication/verify", {
  //       method: "POST",
  //       headers: { jwt_token: localStorage.token },
  //     });
  //     const parseRes = await res.json();

  //     parseRes === true ? setIsAuth(true) : setIsAuth(false);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

//   useEffect(() => {
//     checkAuth();
//   }, []);

  //auth state set defaul to false
  // const [isAuth, setIsAuth] = useState(false);

  // const setAuth = (boolean) => {
  //   setIsAuth(boolean);
  // };

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <AccountProvider>
                <CohortProvider>
                  <StudentProvider>
                    <AccountServices /> {/* Actual Component */}
                  </StudentProvider>
                </CohortProvider>
              </AccountProvider>
            }
          ></Route>
          <Route
            exact
            path='/manager'
            element={
              <>
                <Header />
                <CohortProvider>
                  <ManagerSideNav />
                  <AverageCohort /> 
                  {/* <AddCohort /> */}
                </CohortProvider>
                {/*Rest of manager stuff goes here*/}
              </>
            }
          ></Route>
          <Route
            exact
            path='/student'
            element={
              <>
                <Header />
                <StudentProvider>
                  <StudentInfoBar />
                  <AddTask />
                  <TasksPage />
                </StudentProvider>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
