import './SignUpButton.css'
import React from 'react'
import { Link } from 'react-router-dom'

function SignUpButton(){
    return (
        <Link to="/account/create" className='signUpButton'>
            Join now
        </Link>
    )
}

export default SignUpButton