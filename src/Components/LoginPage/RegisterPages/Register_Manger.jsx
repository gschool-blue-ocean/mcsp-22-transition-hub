import React from "react";
import "./Register_Manager.css";
import { useState } from "react";
import { Link } from "react";

const Register_Manager = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    cohort: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "manager",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, userName, password };
      const res = await fetch("http://localhost:8000/authorization/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }); // may have to change route, unsure at this time
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        TransformStream.success("Register Successful");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
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
            value={formData.userName}
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
        <div className='Register_Manager_Form_Input_Container'>
          <label>Cohort</label>
          <input
            type='text'
            placeholder=''
            name='cohort'
            onChange={(e) => handleChange(e)}
            value={formData.cohort}
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
            type='email'
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
      <Link to='/login'>Login</Link>
    </>
  );
};

export default Register_Manager;
