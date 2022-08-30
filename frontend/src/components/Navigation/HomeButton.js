import React from 'react';
import { NavLink } from 'react-router-dom'
import cloudlogo from '../../images/cloudlogo.png'

function HomeButton () {
    <>
        <NavLink to='/'>
            <img src={cloudlogo}/>
        </NavLink>
    </>
}

export default HomeButton;