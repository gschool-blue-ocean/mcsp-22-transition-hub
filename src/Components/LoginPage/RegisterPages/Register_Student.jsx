import ReturnToLogin from "../ReturnToLogin";
import React, { useEffect } from "react";
import { useState, useContext } from "react";
import "./Register_Student.css";
import AuthContext from "../../Context/AuthContext";
import UrlContext from "../../Context/UrlContext";
import axios from "axios";
import AccountContext from "../../Context/AccountServicesContext";
import StudentContext from "../../Context/StudentContext";

const Register_Student = () => {
  const { accountServices, setCurrentService } = useContext(AccountContext);
  const { postDefaultTasks } = useContext(StudentContext);
  const [localStudentId, setLocalStudentId] = useState(null);
  const { cohortsId } = useContext(AuthContext);
  const { url } = useContext(UrlContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    cohortsid: cohortsId,
    branch: "",
    clearance: "",
    ETS: "",
    role: "student",
    dutylocation: "",
    jobtitle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //Have to run this local so it doesn't effect other studentId useEffects throughout the application
  const grabLocalStudentId = async (url, username) => {
    try {
      const response = await fetch(`${url}/user/${username}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      if (data[0]) {
        setLocalStudentId(data[0].studentsid);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onStudentRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url + "/api/auth/register", formData);
      const parseRes = await res.data;
      if (parseRes.token) {
        await grabLocalStudentId(url, formData.username);
      }
    } catch (err) {
      console.error(err.message);
    }
    console.log(formData);
  };

  useEffect(() => {
    if (localStudentId) {
      console.log(`In localStudent use effect ${localStudentId}`);
      postDefaultTasks(url, localStudentId, formData.ETS);
    }
  }, [localStudentId]);

  useEffect(() => {
    if (localStudentId) {
      setCurrentService(accountServices[0]);
    }
  }, [localStudentId]);

  return (
    <>
      <div className='Register_Manager_Title'>
        <div className='return_button_ctn'>
          <ReturnToLogin />
        </div>
        Welcome, to Career Services Manager!
      </div>
      <form className='Register_Student_Form' onSubmit={onStudentRegister}>
        <div className='Register_Manager_Form_Input_Container'>
          <label>UserName</label>
          <input
            type='text'
            placeholder=''
            name='username'
            onChange={handleChange}
          ></input>
        </div>
        <div className='Register_Student_Form_Input_Container'>
          <label>Password</label>
          <input
            type='password'
            placeholder=''
            name='password'
            onChange={handleChange}
          ></input>
        </div>

        <div className='Register_Student_Form_Input_Container'>
          <label>First Name</label>
          <input
            type='text'
            placeholder=''
            name='firstName'
            onChange={handleChange}
          ></input>
        </div>
        <div className='Register_Student_Form_Input_Container'>
          <label>Last Name</label>
          <input
            type='text'
            placeholder=''
            name='lastName'
            onChange={handleChange}
          ></input>
        </div>
        <div className='Register_Student_Form_Input_Container'>
          <label>Email</label>
          <input
            type='email'
            placeholder=''
            name='email'
            onChange={handleChange}
          ></input>
        </div>

        <div className='Register_Student_Form_Input_Container'>
          <label>Duty Location</label>
          <input
            type='text'
            placeholder=''
            name='dutylocation'
            onChange={handleChange}
          ></input>
        </div>

        <div className='Register_Student_Form_Input_Container'>
          <label>Job Title</label>
          <input
            type='text'
            placeholder=''
            name='jobtitle'
            onChange={handleChange}
          ></input>
        </div>

        <div className='Clearance_Container'>
          <label htmlFor='clearance'>Clearance:</label>
          <select
            name='clearance'
            className='Register_Student_Branch'
            onChange={handleChange}
          >
            <option>None</option>
            <option>Secret</option>
            <option>Secret/SCI</option>
            <option>Top Secret</option>
            <option>Top Secret/SCI</option>
            <option>Top Secret/SCI W/Poly</option>
          </select>
        </div>
        <div className='BranchSelection'>
          <label htmlFor='branch'>Select Branch:</label>
          <select id='BranchSelect' name='branch' onChange={handleChange}>
            <option value='Civilian'>Civilian</option>
            <option value='Air Force'>Air Force</option>
            <option value='Coast Guard'>Coast Guard</option>
            <option value='Navy'>Navy</option>
            <option value='Army'>Army</option>
            <option value='Marines'>Marines</option>
          </select>
        </div>
        <div className='CenteredRow_ETS_Date'>
          <label htmlFor='ETS'>ETS Date:</label>
          <input
            type='date'
            id='Student_ETS'
            name='ETS'
            onChange={handleChange}
          />
        </div>
        <button
          className='Register_Button'
          id='Register_Student_Button'
          type='submit'
        >
          Register
        </button>
      </form>
    </>
  );
};

export default Register_Student;
