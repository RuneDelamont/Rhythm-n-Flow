import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSongs } from '../../store/song';

function SongsPage() {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const songs = Object.values(useSelector(state => {
        return state.songs;
    }));


    useEffect(() => {
        dispatch(getAllSongs())
    }, [dispatch])

    console.log(songs);

    if(!user) return(
        <Redirect to='/' />
    );

    // console.log(songs);

    return (
        <div>
            <h1>Songs</h1>
        </div>
    )
}

export default SongsPage;
