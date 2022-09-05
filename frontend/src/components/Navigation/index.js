import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';
import HomeButton from './HomeButton';
import './Navigation.css';
import CreateButton from '../CreateButton';
import CreateAlbumModal from '../CreateAlbumModal';


function Navigation({ isLoaded }) {

    const user = useSelector(state => state.session.user);
    let links;

    if (user) {
        links = (
            <div className='header-root'>
                <div className='nav-links-logged-in'>
                    <HomeButton />
                    <NavLink className='nav-link' to='/songs'>Songs</NavLink>
                    <NavLink className='nav-link' to='/albums'>Albums</NavLink>
                    <CreateAlbumModal />
                    <ProfileButton user={user} />
                </div>
            </div>
        )
    }
    else {
        links = (
            <div className='header-root'>
                <div className='nav-links-logged-out'>
                    <HomeButton />
                    <NavLink className='nav-link' to='/songs'>Songs</NavLink>
                    <NavLink className='nav-link' to='/albums'>Albums</NavLink>
                    <SignupFormModal />
                    <LoginFormModal />
                </div>
            </div>
        )
    }
    return (isLoaded && links);

}

export default Navigation;
