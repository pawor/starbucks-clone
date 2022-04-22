import React from 'react'
import './LogoutButton.css'
import { auth } from './firebase'
import { logout } from './features/userSlice'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"

function LogoutButton(){
    const dispatch = useDispatch()
    const history = useHistory()

    const logoutOfApp = () => {
        auth.signOut().then(() => {
            dispatch(logout())
            history.replace('/')
        }).catch((error) => alert(error.message))
    }

    return (
        <button onClick={logoutOfApp} className="logoutButton">
            Log Out
        </button>
    )
}

export default LogoutButton