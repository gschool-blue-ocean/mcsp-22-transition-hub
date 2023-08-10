import React from "react";
import "./SignOn.css";
import { useContext} from 'react'
import AccountContext from '../Context/AccountServicesContext'

const SignOn = () => {
    const {setCurrentService, accountServices} = useContext(AccountContext)
    return (
        <div className="logOnBG">
            <div className="logOnContainer">
                <div className="logOn_Title">
                    LogIn
                </div>
                <div className="login-form">
                    <div className="login_Input">
                        <label>User Name</label>
                        <input type="text" name="username" />
                    </div>
                    <div className="login_Input">
                        <label>Password</label>
                        <input type="password" name="password" />
                    </div>
                    <button className ="SignOn_Buttons" id="signOn_Submit" type="submit">Submit</button>
                </div>
                <div className="signOn_Register_Container">
                    <button className ="SignOn_Buttons" id="signOn_Register" type="button" onClick={() => setCurrentService(accountServices[1])}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default SignOn;
