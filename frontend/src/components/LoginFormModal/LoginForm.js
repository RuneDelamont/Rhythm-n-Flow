import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import DemoUser from '../DemoUser/DemoUser';
import './LoginForm.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className='log-in-header'>Log In</h1>
        <ul>
          {errors.map((error) => { return <li key={error}>{error}</li> })}
        </ul>
        <input
          className='log-in-text-input'
          placeholder='Username or Email'
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        <input
          className='log-in-text-input'
          placeholder='Password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='button-log-in-modal' type="submit">Log In</button>
      </form>
      <DemoUser />
    </div>
  );
}

export default LoginForm;
