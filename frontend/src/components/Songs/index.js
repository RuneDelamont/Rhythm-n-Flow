import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSongs } from '../../store/song';
import './Songs.css';

function SongsPage() {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const songs = useSelector(state => {
        return Object.values(state.songs);
    });


    useEffect(() => {
        dispatch(getAllSongs())
    }, [dispatch])


    if (!user) return (
        <Redirect to='/' />
    );

    if (!songs) return null;


    return (
        <div className='song-content'>
            <h1 className='song-header'>Songs</h1>
            {songs && songs.map((song) => {
                return (
                    <div className='song-row' key={song.id}>
                        <div className='song-image'>
                            <div className='image-content'>
                                <img src={song.previewImage} alt={song.title} />
                            </div>
                        </div>
                        <div className='song-details'>
                            <div className='song-title'>
                                <NavLink to={`/songs/$song.id`}>{song.title}</NavLink>
                            </div>
                            <div className='song-description'>{song.description}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SongsPage;
