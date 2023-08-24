import "./RegisterPassCode.css";
import React, { useEffect } from "react";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import AccountContext from "../Context/AccountServicesContext";
import { useContext, useState } from "react";
import UrlContext from "../Context/UrlContext";
import ReturnToLogin from "./ReturnToLogin";
import { Navigate } from "react-router-dom";
import ReactModal from "react-modal";

const RegisterPasscode = () => {
  //use effect to grab all the cohort names, put into student in the state
  const { setCurrentService, accountServices } = useContext(AccountContext);
  const { setRoles, setCohortsId } = useContext(AuthContext);
  const { url } = useContext(UrlContext);
  //const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    passcode: "",
  });
  //const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const passcodeVerification = async (formData) => {
    try {
      const results = await axios.post(
        url + "/api/auth/register/verify",
        formData
      );
      const res = await results.data;

      setRoles(res.role);
      if (res.id) {
        setCohortsId(res.id);
      }
      return true;
    } catch (err) {
      console.error(err);
      alert("Unable to Validate Passcode");
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const toRegistration = passcodeVerification(formData);
    if (toRegistration) {
      setCurrentService(accountServices[2]); // <--- === "Register"
      <Navigate to='/' />;
    }
  };

  return (
    <div className='Passcode_BG'>
      <div className='Passcode_Container'>
        <ReturnToLogin />
        <div className='RegisterPassCode_Title'>Verification Passcode</div>
        <form className='passcode_form' onSubmit={handleSubmit}>
          <div className='passcode_Input'>
            <label>Passcode</label>
            <input
              type='password'
              placeholder=''
              name='passcode'
              onChange={handleChange}
              value={formData.passcode}
            ></input>
          </div>
          <button
            type='submit'
            id='registerPasscode_submit'
            style={{ width: "233px" }}
          >
            Submit
          </button>
        </form>
        <p className='passcode_notes'>
          ***This passcode will be provided by either your instructor or
          manager.
        </p>
      </div>
    </div>
  );
};

export default RegisterPasscode;
