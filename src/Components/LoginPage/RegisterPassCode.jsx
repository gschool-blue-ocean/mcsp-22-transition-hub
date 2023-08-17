import "./RegisterPasscode.css";
import React from "react";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import AccountContext from "../Context/AccountServicesContext";
import { useContext, useState } from "react";
import UrlContext from "../Context/URLContext";

const RegisterPasscode = () => {
  //use effect to grab all the cohort names, put into student in the state
  const { setCurrentService, accountServices, currentCohort } =
    useContext(AccountContext);
  const { setRoles, setCohortsId } = useContext(AuthContext);
  const { url } = useContext(UrlContext);

  const [formData, setFormData] = useState({
    passcode: "",
  });

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
    }
  };

  const handleSubmit = () => {
    const toRegistration = passcodeVerification(formData);

    if (toRegistration) {
      setCurrentService(accountServices[2]); // <--- === "Register"
    }
  };
  return (
    <div className='PassCode_BG'>
      <div className='PassCode_Container'>
        <div className='RegisterPassCode_Title'>Verification passcode</div>
        <form className='passCode_form' onSubmit={handleSubmit}>
          <div className='passCode_Input'>
            <label>passcode</label>
            <input
              type='text'
              placeholder=''
              name='passcode'
              onChange={handleChange}
              value={formData.passcode}
            ></input>
          </div>
          <button type='submit' id='registerPassCode_submit'>
            Submit
          </button>
        </form>
        <p className='passCode_notes'>
          ***This passcode will be provided by either your instructor or
          manager.
        </p>
      </div>
    </div>
  );
};

export default RegisterPasscode;
