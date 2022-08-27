import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const user = useSelector(state => state.session.user);

    let links;

    if (user) {
        links = (
            <ProfileButton user={user} />
        )
    }
    else {
        links = (
            <>
                <NavLink to={'/login'}>Log In</NavLink>
                <NavLink to={'/signup'}>Sign Up</NavLink>
            </>
        )
    }
    return (
        <ul>
            <li>
                <NavLink exact to='/'>Home</NavLink>
                {isLoaded && links}
            </li>
        </ul>
    );
}

export default Navigation;
