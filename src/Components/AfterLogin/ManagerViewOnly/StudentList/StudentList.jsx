import './StudentList.css';
import { useState, useEffect, useContext } from 'react';
import CohortContext from '../../../Context/CohortContext';
import LoadingAnimation from '../../../LoadingAnimation';

const StudentList = () => {
    const { displayedStudents, cohort, cohortList, studentAverage } = useContext(CohortContext);
    const [studentsProgress, setStudentsProgress] = useState([]);
  
    const [studentData, setStudentData] = useState([]);
    console.log(studentAverage)
    useEffect(() => {
        const arr = [];
        console.log(studentAverage)
        studentAverage.forEach((student) => {
            console.log(cohort)
            if (student.cohortsid == cohort) {
                console.log('working?')
                arr.push(student);
            }
        })
        console.log(arr)
        setStudentData([...arr]);
      }, [cohort]);
console.log(studentData)
    return (
        cohort && studentData ? 
        (<div className='studentlist_taskprogress_bigcontainer'>
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
                    <tr key={student.studentsid} className='studentlist_tabledata'>
                        <td>{student.firstname}</td>
                        <td>{student.lastname}</td>
                        <td>{student.ets}</td>
                        <td>{`${Math.ceil((student.totalComplete / student.totalTask) * 100)}%`}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>)
        : 
        (<LoadingAnimation />)
    );
}

export default StudentList
