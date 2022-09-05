import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as songActions from '../../store/song';
import EditSongModal from '../EditSongModal';
import './SongDetails.css'

function SongDetails() {

    // methods
    const dispatch = useDispatch();
    let { songId } = useParams();
    songId = Number(songId);
    const history = useHistory();
    const songs = useSelector(state => state.songs);
    const user = useSelector(state => state.session.user);
    const song = songs[Number(songId)];

    // initial data
    useEffect(() => {
        // dispatch(songActions.getAllSongs());
        dispatch(songActions.getSongbyId(songId));
    }, [dispatch, songId]);


    // delete song
    const deleteSong = (e) => {
        e.preventDefault();

        if (song.userId === user.id) {
            dispatch(songActions.deleteSong(song.id));
            history.push('/songs');
        }
    }


    let songform = (
        <div className='song-details-content'>
            <h1 className='song-header'>{song.title}</h1>
            {(user.id === song.userId) &&
                (
                    <div className='song-button-divs'>
                        <EditSongModal song={songId} />
                        <button className='delete-song-button'onClick={deleteSong}>Delete Song</button>
                    </div>
                )
            }
            <div className='edit-song-container'>
                <div className='edit-song-image-container'>
                    <img className='edit-song-image' src={song.previewImage} />
                </div>
                <div className='edit-song-details'>
                    <p>{song.description}</p>
                    <p>{song.url}</p>
                </div>
            </div>
        </div>
    );
    return songform;
}

export default SongDetails;
