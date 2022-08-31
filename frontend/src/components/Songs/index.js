import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function SongsPage() {
    const user = useSelector(state => state.session.user);

    if(!user) return(
        <Redirect to='/home' />
    );

    return (
        <div>
            <h1>Songs</h1>
        </div>
    )
}

export default SongsPage;
