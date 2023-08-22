import './BackButton.css'
import { useContext } from 'react';
import CohortContext from '../../Context/CohortContext';
import StudentContext from '../../Context/StudentContext';

const BackButton = () => {
    const {setCurrentManagerContent} = useContext(CohortContext)
    const {setStudentId} = useContext(StudentContext)


    const handleBackButton = () => {
        setCurrentManagerContent(true)
        setStudentId(null)
    }

    return (
      <button className="back-button" onClick={handleBackButton}>
        Back
      </button>
    );
  };
  
  export default BackButton;