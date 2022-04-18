import './SignInButton.css'
import React from 'react'
import { Link } from 'react-router-dom'


function SignInButton() {
    return (
        <Link to="/account/signin" className='signInButton'>
            Sign in
        </Link>
    )
}
export default SignInButton