import React, { useEffect } from "react";
import "./SignOn.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import AccountContext from "../Context/AccountServicesContext";
import UrlContext from "../Context/UrlContext";
import StudentContext from "../Context/StudentContext";

const SignOn = () => {
  const { setCurrentService, accountServices } = useContext(AccountContext);
  const { setIsAuthenticated, isAuthenticated, roles, setRoles } =
    useContext(AuthContext);
  const { grabStudentId, studentId } = useContext(StudentContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { url } = useContext(UrlContext);

  const navigate = useNavigate();
  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };
      const response = await axios.post(url + "/api/auth/login", body);

      const parseRes = await response.data;

      const verify = await axios.get(url + "/api/auth/verify", {
        headers: {
          token: parseRes.token,
        },
      });

      if (verify) {
        for (let key in parseRes) {
          localStorage.setItem(key, parseRes[key]);
        }
        setIsAuthenticated(true);
        setRoles(parseRes.role);
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  //this will run first
  useEffect(() => {
    if (isAuthenticated && roles === "student") {
      grabStudentId(url, username);
    }
  }, [roles]);

  //then
  useEffect(() => {
    if (isAuthenticated) {
      switch (roles) {
        case "manager":
          navigate("/manager");
          break;
        case "student": //Added to make sure the person has an id, it can load their page
          navigate("/student");
          break;
      }
    } else {
      console.log("Not authenticated");
    }
  }, [roles]);

  return (
    <div className="logOnBG">
      <div className="logOnContainer">
        <div className="logOn_Title"></div>
        <form className="login-form" onSubmit={onSubmitForm}>
          <div className="login_Input">
            <label>User Name</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={formData.username}
            />
          </div>
          <div className="login_Input">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <button className="SignOn_Buttons" id="signOn_Submit" type="submit">
            Log On
          </button>
        </form>
        <div className="signOn_Register_Container">
          <button
            className="SignOn_Buttons"
            id="signOn_Register"
            type="button"
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
