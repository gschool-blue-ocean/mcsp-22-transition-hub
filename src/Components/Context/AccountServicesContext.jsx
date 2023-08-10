import React from 'react';
import {useState, createContext} from 'react'

const AccountContext = createContext()

export const AccountProvider = ({children}) => {
    const [accountServices, setAccountServices] = useState(["LogOn", "PassCode", "Register"]);
    const [currentService, setCurrentService] = useState(accountServices[0])


    return <AccountContext.Provider value={{
        accountServices,
        currentService,
        setCurrentService
    }}>
        {children}
        </AccountContext.Provider>
}

export default AccountContext