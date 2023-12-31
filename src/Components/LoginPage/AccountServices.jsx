import React from "react";
import { useContext } from "react";
import AccountContext from "../Context/AccountServicesContext";
import RegisterPassCode from "./RegisterPassCode";
import RegisterPage from "./RegisterPage";
import SignOn from "./SignOn";

const AccountServices = ({ setAuth }) => {
  const { currentService } = useContext(AccountContext);

  switch (currentService) {
    case "Register":
      return (
        <>
          <RegisterPage setAuth={setAuth} />
        </>
      );
    case "PassCode":
      return (
        <>
          <RegisterPassCode />
        </>
      );
    default:
      return (
        <>
          <SignOn />
        </>
      );
  }
};

export default AccountServices;
