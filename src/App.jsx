import React, { useEffect, useState } from "react";
import AccountServices from "./Components/LoginPage/AccountServices";
import Header from "./Components/AfterLogin/Header";
import { AccountProvider } from "./Components/Context/AccountServicesContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
      <>
        <AccountProvider>
          <AccountServices />
        </AccountProvider>

        <Header />
      </>
    </>
  );
}

export default App;
