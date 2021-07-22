import React, { useEffect, useState } from "react";
import "./registration.sass";
import leftArrow from "../../img/left-arrow.svg"
import { useDispatch, useSelector } from "react-redux";
import { postRegistrationAsync } from "../../actions";

function Registration(props) {
    const dispatch = useDispatch()
    const errorRegistration = useSelector(state => state.errorRegistration)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        setEmail(props.email)
        setPassword(props.password)
    },[])

    const handleFirstName = (firstName) => {
        setFirstName(firstName)
    };

    const handleLastName = (lastName) => {
        setLastName(lastName)
    };

    const handlePassword = (password) => {
        setPassword(password)
    };

    const handleEmail = (email) => {
        setEmail(email)
    };

    const handleRegistration = () => {
        dispatch({type: postRegistrationAsync, user:{ firstName, lastName, email, password }})
    }

    return (
        <div className="registration-container">
            <div className="registration-inputs">
                {<p className="registration-error">{errorRegistration}</p>}
                <input value={firstName} onChange={(e) => handleFirstName(e.target.value)} placeholder="First Name"/>
                <input value={lastName}  onChange={(e) => handleLastName(e.target.value)} placeholder="Last Name"/>
                <input value={email} onChange={(e) => handleEmail(e.target.value)} placeholder="E-mail"/>
                <input value={password} onChange={(e) => handlePassword(e.target.value)} placeholder="Password"/>
            </div>
            <div className="registration-btn">
                <button onClick={props.cancelHandleRegistration}><img src={leftArrow} alt="left-arrow"/></button>
                <button onClick={handleRegistration}>Registration</button>
            </div>
        </div>
    )
}

export default Registration;
