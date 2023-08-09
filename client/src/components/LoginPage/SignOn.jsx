import React from "react";
import "./SignOn.css";

const SignOn = () => {
    return (
        <div className="logOnBG">
            <div className="logOnContainer">
                <div className="login-form">
                    <div>
                        <label>User Name</label>
                        <input type="text" name="username" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" />
                    </div>
                    <button className ="SignOn_Buttons" type="submit">Submit</button>
                </div>
                <div>
                    <button className ="SignOn_Buttons" type="button">Register</button>
                </div>
            </div>
        </div>
    );
};

export default SignOn;
