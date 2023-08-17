import React from "react";
import "./Register_Manager.css";
import { useState, useContext } from "react";
import { Link } from "react";
import axios from "axios";
import AccountContext from "../../Context/AccountServicesContext";
import UrlContext from '../../Context/URLContext'


const Register_Manager = () => {
  // const {setCurrentService, accountServices} = useContext(AccountContext)
  const {url} = useContext(UrlContext)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "manager"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      // setCurrentService(accountServices[0])
      const res = await axios.post(url + '/api/auth/register', formData) // may have to change route, unsure at this time
      const parseRes = await res.data;
      console.log(parseRes)
      // if (parseRes.token) {
      //   localStorage.setItem("token", parseRes.token);
      //   setAuth(true);
      //   TransformStream.success("Register Successful");
      // } else {
      //   setAuth(false);
      //   toast.error(parseRes);
      // }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className='Register_Manager_Title'>
        Welcome, New Career Services Manager!
      </div>
      <form className='Register_Manager_Form' onSubmit={onSubmitForm}>
        <div className='Register_Manager_Form_Input_Container'>
          <label>UserName</label>
          <input
            type='text'
            placeholder=''
            name='username'
            onChange={handleChange}
            value={formData.username}
          ></input>
        </div>
        <div className='Register_Manager_Form_Input_Container'>
          <label>Password</label>
          <input
            type='password'
            placeholder=''
            name='password'
            onChange={handleChange}
            value={formData.password}
          ></input>
        </div>
        <div className='Register_Manager_Form_Input_Name'>
          <div className='Register_Manager_Form_Input_Container'>
            <label>First Name</label>
            <input
              type='text'
              placeholder=''
              name='firstName'
              onChange={(e) => handleChange(e)}
              value={formData.firstName}
            ></input>
          </div>
          <div className='Register_Manager_Form_Input_Container'>
            <label>Last Name</label>
            <input
              type='text'
              placeholder=''
              name='lastName'
              onChange={(e) => handleChange(e)}
              value={formData.lastName}
            ></input>
          </div>
        </div>

        <div className='Register_Manager_Form_Input_Container'>
          <label>Email</label>
          <input
            type='text'
            placeholder=''
            name='email'
            onChange={(e) => handleChange(e)}
            value={formData.email}
          ></input>
        </div>
        <button
          className='Register_Button'
          id='Register_Manager_Button'
          type='submit'
        >
          Register
        </button>
      </form>
      {/* <Link to='/login'>Login</Link> */}
    </>
  );
};

export default Register_Manager;
