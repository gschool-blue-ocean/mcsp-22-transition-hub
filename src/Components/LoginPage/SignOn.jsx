import React from "react";
import "./SignOn.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import AuthContext from "../../../Authorization/utils/AuthContext";
import AccountContext from "../Context/AccountServicesContext";

const SignOn = () => {
  const { setCurrentService, accountServices } = useContext(AccountContext);
  const { setIsAuthenticated, isAuthenticated } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  //   console.log(useAuthData);
  const navigate = useNavigate();

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        body
      );

      const parseRes = await response.data;

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setIsAuthenticated(true);
        navigate(isAuthenticated ? "/manager" : "/student"); //may need to change this logic
      } else {
        setIsAuthenticated(false);
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
              value={formData.username}
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
