import './RegisterPassCode.css'
import React from 'react'
import AccountContext from '../Context/AccountServicesContext'
import { useContext } from 'react'

const RegisterPassCode = () => {

    const {setCurrentService, accountServices} = useContext(AccountContext)

    const handleClick = () => {
        /* logic to verify passcode is correct */
        setCurrentService(accountServices[2]) // <--- === "Register"
    }

    return (
        <div className="PassCode_BG">
            <div className="PassCode_Container">
                <div className='RegisterPassCode_Title'>
                    Verification Passcode
                </div>
                <form className='passCode_form'>
                        <div className='passCode_Input'>
                            <label>PassCode</label>
                            <input type='text' placeholder=''></input>
                        </div>
                        <button type='submit' id='registerPasscode_submit' onClick={handleClick}>Submit</button>
                    </form>
                    <p className='passCode_notes'>
                        ***This passcode will be provided by either your instructor or manager. 
                    </p>
            </div>            
        </div>
    )
}

export default RegisterPassCode