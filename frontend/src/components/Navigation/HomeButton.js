import React from 'react';
import { NavLink } from 'react-router-dom'
import cloudlogo from '../../images/cloudlogo.png'
import './Navigation.css';

function HomeButton() {
    return (
        <>
            <NavLink exact to='/'>
                <img title='Home' className='logo' src={cloudlogo} />
            </NavLink>
        </>
    );
}

export default HomeButton;
