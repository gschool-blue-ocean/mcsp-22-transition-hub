import React, { useEffect, useState } from "react";
import AccountServices from "./Components/LoginPage/AccountServices";
import Header from "./Components/AfterLogin/Reuseable/Header";
import { AccountProvider } from "./Components/Context/AccountServicesContext";
import { CohortProvider } from "./Components/Context/cohortContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTask from "./Components/AfterLogin/Reuseable/AddTask/AddTask";
import TasksPage from "./Components/TasksComp/TasksPage";
import ManagerSideNav from "./Components/AfterLogin/ManagerViewOnly/Manager Navigation Bar/ManagerSideNav";
import AverageCohort from "./Components/AfterLogin/ManagerViewOnly/AverageCohort/averageCohort"; //change to capital A

function App() {
  const checkAuth = async () => {
    try {
      const res = await fetch("http://localhost:4500/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });
      const parseRes = await res.json();

      parseRes === true ? setIsAuth(true) : setIsAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  //auth state set defaul to false
  const [isAuth, setIsAuth] = useState(false);

  const setAuth = (boolean) => {
    setIsAuth(boolean);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <AccountProvider>
                <AccountServices />
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
                <AddTask />
                <TasksPage />
                {/*Rest of student stuff goes here*/}
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
