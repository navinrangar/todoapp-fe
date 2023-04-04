import React, { memo, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { signup } from '../../actions/auth';
import { connect } from 'react-redux';


interface Props {
    onSignup: (body: {}) => {};
}


const Signup = ({ onSignup }: Props) => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    function handleFirstName(e: any) {
        setFirstName(e.target.value)
    }

    function handleLastName(e: any) {
        setLastName(e.target.value)
    }

    function handleEmailChange(e: any) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e: any) {
        setPassword(e.target.value);
    }

    const body = {
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "password": password,
    }

    const handleSignup = (e: any) => {
        e.preventDefault();
        onSignup(body);
        navigate('/signin')
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen gap-6'>
            <p className='text-red-500'> {errorMessage} </p>
            <h1> Signup for todo-app!</h1>
            <div className='flex flex-col gap-1'>

                <div className='flex gap-3'>
                    <label> First Name </label>
                    <input type={"text"} onChange={(e) => handleFirstName(e)} />
                </div>

                <div className='flex gap-3'>
                    <label> Last Name </label>
                    <input type={"text"} onChange={(e) => handleLastName(e)} />
                </div>

                <div className='flex gap-3'>
                    <label> Email </label>
                    <input type={"email"} onChange={(e) => handleEmailChange(e)} />
                </div>

                <div className='flex gap-3'>
                    <label> Password </label>
                    <input type={"password"} onChange={(e) => handlePasswordChange(e)} />
                </div>
                <button type="submit" onClick={(e) => handleSignup(e)}> Sign up!</button>
                <p> already have an account? Please login <a className="hover:underline" href='/'> here </a></p>
            </div>
        </div>
    )
}

export default memo(Signup);


const mapDispatchToProps = {
    onSignup: signup
}

export const SignupPage = connect(undefined, mapDispatchToProps)(memo(Signup));
