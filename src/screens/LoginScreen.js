import "./LoginScreen.css"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { TextField } from '@mui/material'
import { login } from '../features/userSlice'
import FormSubmit from '../FormSubmit'
import { useDispatch } from "react-redux"
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded'
import CloseIcon from '@mui/icons-material/Close'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';


function LoginScreen() {
    const { register, handleSubmit, watch, errors  } = useForm()
    const [passwordShown, setPasswordShown] = useState(false)
    const dispatch =  useDispatch()

    const onSubmit = ({email, password}) => {
        
    }

    return (
        <div className="loginScreen">
            <div className="loginScreen__left">
                <Link to="/">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
                        alt=""
                    />
                </Link>
                <div className="loginScreen__info">
                    <h1>Sign in or create an account 🌟</h1>
                </div>
            </div>
            <div className="loginScreen__right">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="loginScreen__inputContainer">
                        <TextField 
                            label="Standard" 
                            name="email" 
                            type="email" 
                            InputLabelProps={{ style: { color: "rgba(0,0,0,0.56)"}}}
                            InputProps={{ style: { fontWeight: "800"}}}
                            className="loginScreen__input"
                            inputRef={register({required: true})}
                        />
                        {errors.email && (
                            <div className="loginScreen__error">
                                <CloseIcon fontSize="small"/>
                                <span>Enter an email.</span>
                                <ReportProblemRoundedIcon 
                                    fontSize="small"
                                    className="loginScreen__reportIcon"
                                />
                            </div>
                        )}
                    </div>

                    <div className="loginScreen__inputContainer">
                        <TextField 
                            label="Standard" 
                            name="password" 
                            type={passwordShown ? "text" : "password"}
                            InputLabelProps={{ style: { color: "rgba(0,0,0,0.56)"}}}
                            InputProps={{ style: { fontWeight: "800"}}}
                            className="loginScreen__input"
                            inputRef={register({required: true})}
                        />
                        {passwordShown ? (
                            <VisibilityOutlinedIcon 
                                onClick={() => setPasswordShown(!passwordShown)}
                                className="loginScreen__visibilityIcon"
                            />
                        ):(
                            <VisibilityOffOutlinedIcon  
                                onClick={() => setPasswordShown(!passwordShown)}
                                className="loginScreen__visibilityIcon"
                            />
                        )}
                        {errors.email && (
                            <div className="loginScreen__error">
                                <CloseIcon fontSize="small"/>
                                <span>Enter an password.</span>
                                <ReportProblemRoundedIcon 
                                    fontSize="small"
                                    className="loginScreen__reportIcon"
                                />
                            </div>
                        )}
                    </div>

                    <div className="loginScreen__resetLinks">
                        <Link to="/">Forgot your username?</Link>
                        <Link to="/">Forgot your password?</Link>
                    </div>
                    <FormSubmit 
                        name="Sign in"
                        type="submit"
                    />
                    
                </form>

                <div>
                    <h4>JOIN STARBUCKS® REWARDS</h4>
                </div>
                <div className="loginScreen__joinNow">
                    <div className="loginScreen__joinNowContainer">
                        <Link to="/account/create">Join now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginScreen