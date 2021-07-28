import React, { useState } from "react";
import "./auth.sass";
import Registration from "../registration/registration";
import { useDispatch, useSelector } from "react-redux";
import { postLoginAction, postLoginRequest } from "../../actions";
import { useHistory } from "react-router-dom";
import SpinnerAuth from "../../img/spinner-auth.svg"

function Auth() {
    const dispatch = useDispatch()
    const history = useHistory()
    const errorAuth = useSelector(state => state.errorAuth)
    const isAuth = useSelector(state => state.user.isAuth)
    const isLoadingLogin = useSelector(state => state.user.isLoadingLogin)
    const [regist, setRegistr] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const cancelHandleRegistration = () => {
        setRegistr(!regist)
    }

    const handleEmail = (email) => {
        setEmail(email)
    }

    const handlePassword = (password) => {
        setPassword(password)
    }

    const handleLogin = () => {
        dispatch(postLoginAction.request({email, password}))
    }

    if (isAuth) {
        history.push("/")
    }

    return (
        <>
            {regist ? <Registration
                    email={email}
                    password={password}
                    cancelHandleRegistration={cancelHandleRegistration}
                    handleEmail={handleEmail}
                    handlePassword={handlePassword}/> :
                <div className="auth-container">
                    {<p className="auth-error">{errorAuth}</p>}
                    <div className="auth-inputs">
                        <input value={email} onChange={(e) => handleEmail(e.target.value)} placeholder="E-mail"/>
                        <input value={password} onChange={(e) => handlePassword(e.target.value)} placeholder="Password"/>
                    </div>
                    <div className="auth-btn">

                        {isLoadingLogin ? <img src={SpinnerAuth} alt="spinner"/> :
                            <>
                                <button onClick={handleLogin}>Login</button>
                                <button onClick={cancelHandleRegistration}>Registration</button>
                            </>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Auth;
