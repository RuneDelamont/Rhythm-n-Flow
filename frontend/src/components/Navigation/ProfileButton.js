import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import profileLogo from '../../images/profilelogo.png';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    }

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        }

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = e => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    }

    return (
        <>
                <img onClick={openMenu} className='logo profile-logo' src={profileLogo} />
            {showMenu && (
                <div className='user-dropdown'>
                    <div>{user.username}</div>
                    <div>{user.email}</div>
                    <div>
                        <button className='button-logout' onClick={logout}>Log Out</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProfileButton;
