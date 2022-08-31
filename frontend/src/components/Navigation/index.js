import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import HomeButton from './HomeButton';
import './Navigation.css';
import cloudlogo from '../../images/cloudlogo.png';


function Navigation({ isLoaded }) {
    const user = useSelector(state => state.session.user);

    let links;
    // <div>
    if (user) {
        links = (
            <div className='header-root'>
                <div className='nav-links-logged-in'>
                    <NavLink className='home-button' exact to='/home'>
                        {/* <HomeButton /> */}
                        <img title='Home' className='logo' src={cloudlogo} />
                    </NavLink>
                    <NavLink className='nav-link' to='/songs'>Songs</NavLink>
                    <NavLink className='nav-link' to='/albums'>Albums</NavLink>
                    <ProfileButton user={user} />
                </div>
            </div>
        )
    }
    else {
        links = (
            <div className='header-root'>
                <div className='nav-links-logged-out'>
                    <NavLink className='home-button' exact to='/home'>
                        {/* <HomeButton /> */}
                        <img title='Home' className='logo' src={cloudlogo} />
                    </NavLink>
                    {/* <NavLink exact to='/'>Home</NavLink> */}
                    {/* <HomeButton /> */}
                    <NavLink className='nav-link' to='/songs'>Songs</NavLink>
                    <NavLink className='nav-link' to='/albums'>Albums</NavLink>
                    {/* <NavLink className='nav-link' to='/signup'>
                        <button className='button-sign-up'>Sign Up</button>
                    </NavLink> */}
                    <SignupFormModal />
                    <LoginFormModal />
                </div>
            </div>
        )
    }

    return (isLoaded && links);

    // </div>
}

export default Navigation;
