// import { updateCurrentUser } from 'firebase/auth';
import React from 'react'
import { createContext, useEffect, useState } from 'react'
import {userObserver} from "../auth/firebase"

export const AuthContext = createContext();

const AuthContextProvider = (props) =>{
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        setCurrentUser(localStorage.getItem("token"))
        userObserver(setCurrentUser)
    }, [])

    return(
        <AuthContext.Provider value={{ currentUser}}>
                {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;