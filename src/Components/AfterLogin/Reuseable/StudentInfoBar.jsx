import "./StudentInfoBar.css";
import { useState, useEffect, useContext } from "react";
import profileicon from "./img/usericon.png";
import moment from "moment";
import UrlContext from "../../Context/UrlContext";
import StudentContext from "../../Context/StudentContext";

const StudentInfoBar = () => {
  const { url } = useContext(UrlContext);
  const { studentId } = useContext(StudentContext);

  const [studentInfo, setStudentInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    branch: "",
    jobtitle: "",
    dutylocation: "",
    ets: "",
    clearancetype: "",
  });

  useEffect(() => {
    const getStudentInfo = async () => {
      if (studentId !== null) {
        const response = await fetch(`${url}/info/${studentId}`);
        const results = await response.json();
        if (results[0]) {
          setStudentInfo(results[0]);
        }
      }
    };
    getStudentInfo();
  }, [studentId]);

  return (
    <div className='app_BG'>
      <div className='studentInfo-bigcontainer' id='mySideNav'>
        <div className='studentInfo-wrapper'>
          <div style={{ marginTop: "50px" }}>
            <img
              src={profileicon}
              style={{ height: "55px", width: "55px" }}
            ></img>
            <div className='studentInfo-titlediv'>
              <h2 className='studentInfo-text'>Student Profile</h2>
            </div>
          </div>
          <div className='studentInfo'>
            <div className='studentInfo-fetch'>
              <span className='studentInfo-key'>First Name:</span>
              <span className='studentInfo-value'>{studentInfo.firstname}</span>
            </div>
            <div className='studentInfo-fetch'>
              <span className='studentInfo-key'>Last Name:</span>
              <span className='studentInfo-value'>{studentInfo.lastname}</span>
            </div>
            <div className='studentInfo-fetch'>
              <span className='studentInfo-key'>Email:</span>
              <span className='studentInfo-value'>{studentInfo.email}</span>
            </div>
            <div className='studentInfo-fetch'>
              <span className='studentInfo-key'>Military Branch:</span>
              <span className='studentInfo-value'>{studentInfo.branch}</span>
            </div>
            <div className='studentInfo-fetch'>
              <span className='studentInfo-key'>Job Title:</span>
              <span className='studentInfo-value'>{studentInfo.jobtitle}</span>
            </div>
            <div className='studentInfo-fetch'>
              <span className='studentInfo-key'>Duty Location:</span>
              <span className='studentInfo-value'>
                {studentInfo.dutylocation}
              </span>
            </div>
            <div className='studentInfo-fetch'>
              <span className='studentInfo-key'>ETS Date:</span>
              <span className='studentInfo-value'>
                {moment(studentInfo.ets).format("MM/DD/YYYY")}
              </span>
            </div>
            <div className='studentInfo-fetch'>
              <span className='studentInfo-key'>Clearance Type:</span>
              <span className='studentInfo-value'>
                {studentInfo.clearancetype}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoBar;
