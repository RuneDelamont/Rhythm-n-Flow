import React, {useState } from 'react';
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session';
import './DemoUser.css'

function DemoUser () {
    const dispatch = useDispatch();
    const [credential] = useState('Demo-lition');
    const [password] = useState('password');

    const demoLogin = e => {
        // e.preventDefault();
        return dispatch(sessionActions.login({ credential, password }));
    }

    return (
        <button className='button-demo-user' type='submit' onClick={demoLogin}>Demo User log in</button>
    )
}

export default DemoUser;
