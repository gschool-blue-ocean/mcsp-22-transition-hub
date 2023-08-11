import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <>
            <div className="app_BG">
                <div className="header-container">
                    <button className='header-buttons'><span style={{paddingRight: '5px'}}><FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" style={{color: "#ffffff",}} /></span><span>Log Out</span></button>
                    {/* <div id='header-addCohortBtn'>
                        <button id='header-addCohortBtn'>Add Cohort</button>
                    </div> */}
                    <div className='header-dropdownBtn'>
                        <span><FontAwesomeIcon className='barIcon' icon={faBars} size="2xl" /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
