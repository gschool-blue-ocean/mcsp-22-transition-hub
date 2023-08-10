import React, { useEffect, useState } from "react";
import AccountServices from "./Components/LoginPage/AccountServices";
import Header from "./Components/AfterLogin/Header";
import { AccountProvider } from "./Components/Context/AccountServicesContext";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 

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
        <Header />
        //Rest of student stuff goes here
      }>
      </Route>
            <Route exact path="/manager" element={
        <Header />
        //Rest of student stuff goes here
      }>
      </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App