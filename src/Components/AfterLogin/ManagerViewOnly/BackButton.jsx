import './BackButton.css'
import { useContext } from 'react';
import CohortContext from '../../Context/CohortContext';
import StudentContext from '../../Context/StudentContext';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const {setCurrentManagerContent} = useContext(CohortContext)
    const {setStudentId} = useContext(StudentContext)
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate(`/manager`)
        setStudentId(null)
    }

    return (
      <button className="back-button" onClick={handleBackButton}>
        Back
      </button>
    );
  };
  
  export default BackButton;