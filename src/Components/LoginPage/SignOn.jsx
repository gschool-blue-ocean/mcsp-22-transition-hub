import React from "react";
import "./SignOn.css";
import axios from "axios";
import { useAuthDataUpdate } from "../../../Authorization/utils/AuthContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AccountContext from "../Context/AccountServicesContext";

const SignOn = () => {
  const setAuthData = useAuthDataUpdate();
  const { setCurrentService, accountServices } = useContext(AccountContext);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await axios.post(
        "http://localhost:4500/api/auth/login",
        body
      );

      const parseRes = await response.data;

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuthData(true);
      } else {
        setAuthData(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className='logOnBG'>
      <div className='logOnContainer'>
        <div className='logOn_Title'>LogIn</div>
        <form className='login-form' onSubmit={onSubmitForm}>
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
              type='current-password'
              name='current-password'
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <button className='SignOn_Buttons' id='signOn_Submit' type='submit'>
            Log On
          </button>
        </form>
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
