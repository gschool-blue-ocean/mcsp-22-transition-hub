import React from "react"
import './Register_Manager.css'
import { useState } from "react";

const Register_Manager = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        cohort: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "manager"
    });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


return (
    <>
    <div className="Register_Manager_Title">
        Welcome, new Career Services Manager!
    </div>
        <form className="Register_Manager_Form">
            <div className="Register_Manager_Form_Input_Container">
                <label>UserName</label>
                <input type='text' placeholder=''
                name="username"
                onChange={handleChange}
                value={formData.username}></input>
            </div>
            <div className="Register_Manager_Form_Input_Container">
                <label>Password</label>
                <input type='password' placeholder=''
                name="password"
                onChange={handleChange}
                value={formData.password}></input>
            </div>
            <div className="Register_Manager_Form_Input_Container">
                <label>Cohort</label>
                <input type='text' placeholder=''
                name="cohort"
                onChange={handleChange}
                value={formData.cohort}></input>
            </div>
            <div className="Register_Manager_Form_Input_Name">
            <div className="Register_Manager_Form_Input_Container">
                <label>First Name</label>
                <input type='text' placeholder=''
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}></input>
            </div>
            <div className="Register_Manager_Form_Input_Container">
                <label>Last Name</label>
                <input type='text' placeholder=''
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}></input>
            </div>
            </div>

            <div className="Register_Manager_Form_Input_Container">
                <label>Email</label>
                <input type='email' placeholder=''
                name="email"
                onChange={handleChange}
                value={formData.email}></input>
            </div>
            <button className="Register_Button" id="Register_Manager_Button">Register</button>
        </form>
    </>
)

}

export default Register_Manager