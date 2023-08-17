import "./RegisterPage.css";
import React from "react";
import AuthContext from "../Context/AuthContext";
import { useContext } from "react";
import Register_Manager from "./RegisterPages/Register_Manger";
import Register_Student from "./RegisterPages/Register_Student";

const RegisterPage = () => {
  const {roles} = useContext(AuthContext)
  let currentShowing

  switch (roles) {
    case 'student':
      currentShowing = <Register_Student />
      break;
  
    case 'manager':
      currentShowing = <Register_Manager />
      break;
  }

  return (
    <div className='RegisterPage_BG'>
      <div className='RegisterPage_Container'>
        {currentShowing}
      </div>
    </div>
  );
};

export default RegisterPage;
