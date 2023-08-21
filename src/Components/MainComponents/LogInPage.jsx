import React from "react";
import AccountServices from "../LoginPage/AccountServices";
import { AccountProvider } from "../Context/AccountServicesContext";
import { CohortProvider } from "../Context/CohortContext";
import { StudentProvider } from "../Context/StudentContext";

const LogInPage = () => {
 

  return (
            <>
              <AccountProvider>
                  <AccountServices /> {/* Actual Component */}
              </AccountProvider>
            </>
  );
}

export default LogInPage;
