import './BackButton.css'
import { useContext } from 'react';
import CohortContext from '../../Context/CohortContext';

const BackButton = () => {
    const {setCurrentManagerContent} = useContext(CohortContext)

    const handleClick = () => {
        setCurrentManagerContent(true)
        //reset current showing student to no one
    }

    return (
      <button className="back-button" onClick={handleClick}>
        Back
      </button>
    );
  };
  
  export default BackButton;