import React, { useEffect, useState } from "react";
import AccountServices from "./Components/LoginPage/AccountServices";
import Header from "./Components/AfterLogin/Reuseable/Header";
import { AccountProvider } from "./Components/Context/AccountServicesContext";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import AddTask from "./Components/AfterLogin/Reuseable/AddTask/AddTask";
import ManagerSideNav from "./Components/AfterLogin/ManagerViewOnly/Manager Navigation Bar/ManagerSideNav";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
      <Route exact path="/" element={
              <AccountProvider>
              <AccountServices />
            </AccountProvider>
      }>
      </Route>
        <Route exact path="/manager" element={
          <>
            <Header />
            <ManagerSideNav />
             {/*Rest of manager stuff goes here*/}   
          </>
        }>
      </Route>
        <Route exact path="/student" element={
          <>
            <Header />
            <AddTask />
            {/*Rest of student stuff goes here*/}   
          </>
   
        }>
      </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App