import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router';
import { signIn } from '../../actions/auth';
import { connect } from 'react-redux';
import { userStateSelector } from '../../selectors/todo';
import { UserState } from '../../reducers/user';

interface Props {
    onSignIn: (body: {}) => void
}

const SignIn = ({ onSignIn }: Props) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [firstName, setFirstName] = useState('');

    const body = {
        "email": email,
        "password": password
    }

    const handleSignIn = async (e: any) => {
        e.preventDefault();
        onSignIn(body);
        navigate('/');
    }

    function handleEmailChange(e: any) {
        e.preventDefault();
        setEmail(e.target.value);
    }

    function handlePasswordChange(e: any) {
        e.preventDefault();
        setPassword(e.target.value);
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen gap-6'>
            <p className='text-red-500'> {errorMessage} </p>
            <h1> Sign in to todo-app!</h1>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-3'>
                    <label> Email </label>
                    <input type={"email"} onChange={(e) => handleEmailChange(e)} />
                </div>

                <div className='flex gap-3'>
                    <label> Password </label>
                    <input type={"password"} onChange={(e) => handlePasswordChange(e)} />
                </div>
                <button type="submit" onClick={(e) => handleSignIn(e)}> Sign In!</button>
            </div>
            <p> don't have an account? create one <a className="hover:underline " href="/signup"> here </a></p>
        </div>
    )
}

export default memo(SignIn);

const mapDispatchToProps = {
    onSignIn: signIn
}

const mapStateToProps = () => {
    return {
        loggedInUser: userStateSelector
    }
}

export const SignInPage = connect(undefined, mapDispatchToProps)(memo(SignIn))