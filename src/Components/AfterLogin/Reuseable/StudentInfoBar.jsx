import './StudentInfoBar.css';
import { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import profileicon from "./img/usericon.png";


const StudentInfoBar = () => {
    
    const [studentInfo, setStudentInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        branch: '',
        ets: '',
        clearanceType: '',
        
    });

    const getStudentInfo = async () => {
         const response = await fetch('http://localhost:5173/api/studentinfo/:id');
         const results = await response.json();
         setStudentInfo(results);
         console.log(results)
    }
    useEffect(() => {
        getStudentInfo();
    }, []);
    
    return (
        <>
            <div className='studentInfo-bigcontainer'>
                <div className='studentInfo-wrapper'>
                    <div style={{marginTop: '70px'}}>
                        {/* <FontAwesomeIcon icon={faUser} style={{color: "#f0f0f0"}} size="xl"/> */}
                        <img src={profileicon} style={{height: '55px', width: '55px'}}></img>
                        <div className='studentInfo-titlediv'>
                            <h2 className='studentInfo-text'>Student Profile</h2>
                        </div>
                    </div>
                    <div className='studentInfo'>
                        <div className='studentInfo-fetch'>
                            <span className='studentInfo-categoryTitle'>First Name:</span>
                            <span className='studentInfo-categoryDetails'>{studentInfo.firstName}</span>
                            <span className='studentInfo-categoryTitle'>Michelle</span>
                        </div>
                        <div className='studentInfo-fetch'>
                            <span className='studentInfo-categoryTitle'>Last Name:</span>
                            <span className='studentInfo-categoryDetails'>{studentInfo.lastName}</span>
                            <span className='studentInfo-categoryTitle'>Dukette</span>
                        </div>
                        <div className='studentInfo-fetch'>
                            <span className='studentInfo-categoryTitle'>Email:</span>
                            <span className='studentInfo-categoryDetails'>{studentInfo.email}</span>
                            <span className='studentInfo-categoryTitle'>mdukette978@gmail.com</span>
                        </div>
                        <div className='studentInfo-fetch'>
                            <span className='studentInfo-categoryTitle'>Military Branch:</span>
                            <span className='studentInfo-categoryDetails'>{studentInfo.branch}</span>
                            <span className='studentInfo-categoryTitle'>Army</span>
                        </div>
                        <div className='studentInfo-fetch'>
                            <span className='studentInfo-categoryTitle'>ETS Date:</span>
                            <span className='studentInfo-categoryDetails'>{studentInfo.ets}</span>
                            <span className='studentInfo-categoryTitle'>2023-09-08</span>
                        </div>
                        <div className='studentInfo-fetch'>
                            <span className='studentInfo-categoryTitle'>Clearance Type:</span>
                            <span className='studentInfo-categoryDetails'>{studentInfo.clearanceType}</span>
                            <span className='studentInfo-categoryTitle'>Secret</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentInfoBar
