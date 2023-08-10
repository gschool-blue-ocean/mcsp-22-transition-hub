import React, { useEffect, useState } from "react";
import AccountServices from "./Components/LoginPage/AccountServices";
import Header from "./Components/AfterLogin/Header";
import { AccountProvider } from "./Components/Context/AccountServicesContext";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <>
      <AccountProvider>
        <AccountServices />
      </AccountProvider>

      <Header />
    </>
    </>
  )
}

export default App
