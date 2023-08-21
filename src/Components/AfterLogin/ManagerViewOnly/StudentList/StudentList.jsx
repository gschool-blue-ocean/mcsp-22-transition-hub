import './StudentList.css';
import { useState, useEffect, useContext } from 'react';
import CohortContext from '../../../Context/CohortContext';
import StudentContext from '../../../Context/StudentContext';
import LoadingAnimation from '../../../LoadingAnimation';
import moment from 'moment';
import ManagerSideNav from '../ManagerNavigationBar/ManagerSideNav';

const StudentList = () => {
    const { displayedStudents, cohort, cohortList, studentAverage, setCurrentManagerContent } = useContext(CohortContext);
    const {handleCheckBoxChange, setStudentId, studentId, fetchTasks, test, setTest} = useContext(StudentContext)
    const [studentData, setStudentData] = useState([]);
    const [sortDirection, setSortDirection] = useState('asc');
    const [sortedColumn, setSortedColumn] = useState(null);


    useEffect(() => {
        const arr = [];
        studentAverage.forEach((student) => {
            if (student.cohortsid == cohort) {
                arr.push(student);
            }
        })
        setStudentData([...arr]);
      }, [cohort, handleCheckBoxChange]);


      //we are mapping throught the sorted students not vice Student data
        //below function is to sort the data, making a copy of the studentData
      const sortedStudentData = studentData.slice().sort((a, b) => {
        if (sortedColumn === 'firstname') {
            return sortDirection === 'asc' ? a.firstname.localeCompare(b.firstname) : b.firstname.localeCompare(a.firstname);
        } else if (sortedColumn === 'lastname') {
            return sortDirection === 'asc' ? a.lastname.localeCompare(b.lastname) : b.lastname.localeCompare(a.lastname);
        } else if (sortedColumn === 'ets') {
            const aValue = new Date(a.ets);
            const bValue = new Date(b.ets);
            return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
        } else if (sortedColumn === 'completion') {
            return sortDirection === 'asc'
                ? (a.totalComplete / a.totalTask) - (b.totalComplete / b.totalTask)
                : (b.totalComplete / b.totalTask) - (a.totalComplete / a.totalTask);
        }
        return 0;
    });

    //handles asc/desc based of the selected column
    const handleSortClick = (column) => {
        if (sortedColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortDirection('asc');
            setSortedColumn(column);
        }
    };



    const handleSetStudent = (e) => {
            setStudentId(e.currentTarget.id) 
            setCurrentManagerContent(false)

    }

    return (
        // cohort && studentData ? (
        
        <div className='studentlist_taskprogress_bigcontainer'>
            <div className='studentlist_headerContainer'>
                <h2 className='studentlist_h2'>Task Progress By Student</h2>
                <div className='studentList_cohort_buttons'>
                    <ManagerSideNav />
                </div>
            </div>

            <table className='studentlist_table'>
                <thead>
                    <tr>
                        <th className="th_Sort" onClick={() => handleSortClick('firstname')}>First Name 🢓</th>
                        <th className="th_Sort" onClick={() => handleSortClick('lastname')}>Last Name 🢓</th>
                        <th className="th_Sort" onClick={() => handleSortClick('ets')}>ETS Date 🢓</th>
                        <th className="th_Sort" onClick={() => handleSortClick('completion')}>Task Completion 🢓</th>
                    </tr>
                </thead>
                <tbody className='studentlist_tablerow'>
                    {sortedStudentData.map((student, index) => (
                    <tr key={student.studentsid} className='studentlist_tabledata' onClick={e => handleSetStudent(e)} id={student.studentsid}>
                        <td>{student.firstname}</td>
                        <td>{student.lastname}</td>
                        <td>{moment(student.ets).format('MM/DD/YYYY')}</td>
                        <td>{`${Math.ceil((student.totalComplete / student.totalTask) * 100)}%`}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        // : 
        // (<LoadingAnimation />)
    );
}

export default StudentList;
