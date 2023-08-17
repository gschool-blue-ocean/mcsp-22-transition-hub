import "./Header.css";
import { useState, useContext } from "react";
import StudentInfoBar from "./StudentInfoBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "./img/transition-light.png";
import AuthContext from "../../Context/AuthContext";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { setRoles, setIsAuthenticated } = useContext(AuthContext);

  const onLogout = () => {
    setRoles("");
    setIsAuthenticated('')
    localStorage.setItem("token", '');
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className='app_BG'>
        <div className='header-container'>
          <Link className='header-logout-link' to='/'>
            <button className='header-buttons' onClick={onLogout}>
              <span style={{ paddingRight: "5px" }}>
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  size='lg'
                  style={{ color: "#ffffff" }}
                />
              </span>
              <span>Log Out</span>
            </button>
          </Link>

          <img src={logo} loading='lazy'></img>

          <div className='header-dropdownBtn'>
            <span onClick={toggleExpansion}>
              <FontAwesomeIcon className='barIcon' icon={faBars} size='2xl' />
            </span>
          </div>
        </div>
        {isExpanded && (
          <div className='header-actualdropdown'>
            <ul className='headerUL-dropdownlist' style={{ listStyle: "none" }}>
              <a className='header-dropdownlist-item-link' href=''>
                <li
                  className='header-dropdownlist-item'
                  style={{
                    borderBottom: "1px solid #393941",
                    borderTop: "1px solid #393941",
                  }}
                >
                  Frequently Asked Questions
                </li>
              </a>
              <a
                className='header-dropdownlist-item-link'
                href='.pdf'
                download='general_tasklist_template'
                target='_blank'
              >
                <li className='header-dropdownlist-item'>
                  Download Tasklist Template
                </li>
              </a>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
