import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import './SignupForm.css';

function SignupFormPage() {
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
        if(password === confirmPassword){
            setErrors([]);
            return dispatch(sessionActions.signup({ firstName, lastName, email, password, username}))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field'])
    }

    return (
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, id) => <li key={id}>{ error }</li>)}
            </ul>
            <label>
                First Name
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>
                Last Name
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <label>
                User Name
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Password
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label>
                Confirm Password
                <input
                    type="text"
                    value={confirmPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                />
            </label>
            <label>
                E-mail
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <button type='submit'>Sign Up</button>
        </form>
    )
}

export default SignupFormPage;
