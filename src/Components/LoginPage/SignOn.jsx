import React from "react";
import "./SignOn.css";
import { useContext, useState } from "react";
//import { Link, Redirect } from "react-router-dom";
import AccountContext from "../Context/AccountServicesContext";

const SignOn = ({ setAuth }) => {
  const { setCurrentService, accountServices } = useContext(AccountContext);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='logOnBG'>
      <div className='logOnContainer'>
        <div className='logOn_Title'>LogIn</div>
        <div className='login-form'>
          <div className='login_Input'>
            <label>User Name</label>
            <input
              type='text'
              name='username'
              onChange={handleChange}
              value={formData.userName}
            />
          </div>
          <div className='login_Input'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <button className='SignOn_Buttons' id='signOn_Submit' type='submit'>
            Log On
          </button>
        </div>
        <div className='signOn_Register_Container'>
          <button
            className='SignOn_Buttons'
            id='signOn_Register'
            type='button'
            onClick={() => setCurrentService(accountServices[1])}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignOn;
