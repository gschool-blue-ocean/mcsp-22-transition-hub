import './StudentList.css';
import { useState, useEffect, useContext } from 'react';
import CohortContext from '../../../Context/CohortContext';


const StudentList = () => {
    const { displayedStudents, cohort, cohortList } = useContext(CohortContext);
    const [studentsProgress, setStudentsProgress] = useState([]);
  
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/manager/2/studentsTasks`);
          const results = await response.json();
          setStudentsProgress(results);
          console.log(studentsProgress)
        } catch (error) {
          console.log(error.message);
        }
      };

    useEffect(() => {
      fetchData();
    }, [cohort]);
    
    const [studentData, setStudentData] = useState([]);

    // useEffect(() => {
        const fetchStudentsData = async () => {
          try {
            // URL/manager/:cohort/students/progressdetails
            const response = await fetch('http://localhost:3000/manager/2/studentdetails');
            const results = await response.json();
            setStudentData(results);
            console.log(results)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }

    useEffect(() => {
        fetchStudentsData();
      }, []);
    
    return (
        <div className='studentlist_taskprogress_bigcontainer'>
            <h2 className='studentlist_h2'>Task Progress By Student</h2>
            <table className='studentlist_table'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>ETS Date</th>
                        <th>Task Completion</th>
                    </tr>
                </thead>
                <tbody className='studentlist_tablerow'>
                    {studentData.map((student, index) => (
                    <tr key={student.studentsId} className='studentlist_tabledata'>
                        <td>{student.firstname}</td>
                        <td>{student.lastname}</td>
                        <td>{student.ets}</td>
                        <td>{`${(studentsProgress[index]?.completedtasks / studentsProgress[index]?.totaltasks) * 100}%`}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList
