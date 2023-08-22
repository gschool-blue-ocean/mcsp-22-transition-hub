import React from "react";
import { useState, useContext } from "react";
import "./Register_Student.css";
import AuthContext from "../../Context/AuthContext";
import UrlContext from "../../Context/UrlContext";
import axios from "axios";
import AccountContext from "../../Context/AccountServicesContext";

const Register_Student = () => {
  const { accountServices, setCurrentService } = useContext(AccountContext);
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
    dutylocation: '',
    jobtitle: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target)
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      // setCurrentService(accountServices[0])
      const res = await axios.post(url + "/api/auth/register", formData); // may have to change route, unsure at this time
      const parseRes = await res.data;

      if (parseRes.token) {
        setCurrentService(accountServices[0]);
      }
    } catch (err) {
      console.error(err.message);
    }
    console.log(formData)
  };

  return (
    <>
      <div className="Register_Student_Title">
        Welcome, to Career Services Manager!
      </div>
      <form className="Register_Student_Form" onSubmit={onSubmitForm}>
        <div className="Register_Manager_Form_Input_Container">
          <label>UserName</label>
          <input
            type="text"
            placeholder=""
            name="username"
            onChange={handleChange}
          ></input>
        </div>
        <div className="Register_Student_Form_Input_Container">
          <label>Password</label>
          <input
            type="password"
            placeholder=""
            name="password"
            onChange={handleChange}
          ></input>
        </div>

        <div className="Register_Student_Form_Input_Container">
          <label>First Name</label>
          <input
            type="text"
            placeholder=""
            name="firstName"
            onChange={handleChange}
          ></input>
        </div>
        <div className="Register_Student_Form_Input_Container">
          <label>Last Name</label>
          <input
            type="text"
            placeholder=""
            name="lastName"
            onChange={handleChange}
          ></input>
        </div>
        <div className="Register_Student_Form_Input_Container">
          <label>Email</label>
          <input
            type="email"
            placeholder=""
            name="email"
            onChange={handleChange}
          ></input>
        </div>

        <div className="Register_Student_Form_Input_Container">
          <label>Duty Location</label>
          <input
            type="text"
            placeholder=""
            name="dutylocation"
            onChange={handleChange}
          ></input>
        </div>

        <div className="Register_Student_Form_Input_Container">
          <label>Job Title</label>
          <input
            type="text"
            placeholder=""
            name="jobtitle"
            onChange={handleChange}
          ></input>
        </div>


        <div className="Clearance_Container">
          <label htmlFor="clearance">Clearance:</label>
          <select
            name="clearance"
            className="Register_Student_Branch"
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
        <div className="BranchSelection">
          <label htmlFor="branch">Select Branch:</label>
          <select id="BranchSelect" name="branch" onChange={handleChange}>
            <option value="Civilian">Civilian</option>
            <option value="Air Force">Air Force</option>
            <option value="Coast Guard">Coast Guard</option>
            <option value="Navy">Navy</option>
            <option value="Army">Army</option>
            <option value="Marines">Marines</option>
          </select>
        </div>
        <div className="CenteredRow_ETS_Date">
          <label htmlFor="ETS">ETS Date:</label>
          <input
            type="date"
            id="Student_ETS"
            name="ETS"
            onChange={handleChange}
          />
        </div>
        <button
          className="Register_Button"
          id="Register_Student_Button"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default Register_Student;