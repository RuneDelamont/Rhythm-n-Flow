import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupForm.css';

function SignupForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmedPassword] = useState('')
    const [errors, setErrors] = useState([]);

    if(sessionUser) return (
        <Redirect to='/' />
    );

    const handleSubmit = e => {
        e.preventDefault();
        // if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ firstName, lastName, email, password, username }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        // }
        return setErrors(['Confirm Password field must be the same as the Password field'])
    }

    return (
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h1 className='sign-up-header'>Create Account</h1>
                <ul>
                    {errors.map((error, id) => <li key={id}>{error}</li>)}
                </ul>
                <input className='sign-up-text-input'
                    placeholder='First Name'
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input className='sign-up-text-input'
                    placeholder='Last Name'
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input className='sign-up-text-input'
                    placeholder='User Name'
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input className='sign-up-text-input'
                    placeholder='Password'
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input className='sign-up-text-input'
                    placeholder='Confirm Password'
                    type="text"
                    value={confirmPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                />
                <input className='sign-up-text-input'
                    placeholder='E-mail'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className='button-sign-up-modal' type='submit'>Sign Up</button>

            </form>
    )
}

export default SignupForm;
