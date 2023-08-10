import './RegisterPage.css'
import React from 'react'
import Register_Manager from './RegisterPages/Register_Manger'
import Register_Student from './RegisterPages/Register_Student'


const RegisterPage = () => {
    const currentShowing = false
    return (
        <div className="RegisterPage_BG">
            <div className="RegisterPage_Container">
                {currentShowing ? <Register_Manager/> : <Register_Student />}
            </div>        
        </div>
    )
}

export default RegisterPage