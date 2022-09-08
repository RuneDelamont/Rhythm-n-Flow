import React, { useState, useEffect } from 'react';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as albumActions from '../../store/album';
import * as songActions from '../../store/song';
import EditAlbumModal from '../EditAlbumModal';
import CreateSongModal from '../CreateSongModal';
import './AlbumDetails.css';

function AlbumDetails() {

    // methods
    const dispatch = useDispatch();
    let { albumId } = useParams();
    const history = useHistory();
    const album = useSelector(state => state.albums[albumId]);
    const user = useSelector(state => state.session.user);
    let albumSongs;
    if(album.Songs) albumSongs = album.Songs;


    // initial data
    useEffect(() => {
        dispatch(albumActions.getAlbumById(albumId));
        dispatch(songActions.getAllSongs());
    }, [dispatch, albumId]);


    // delete album
    const deleteAlbum = (e) => {
        e.preventDefault();

        if (album.userId === user.id) {
            dispatch(albumActions.deleteAlbum(album.id));
            history.push('/albums');
        }
    }


    let albumform = (
        <div className='album-details-content'>
            <h1 className='album-header'>{album.title}</h1>
            {(user.id === album.userId) &&
                (
                    <div className='album-button-divs'>
                        {/* <CreateSongModal album={albumId} /> */}
                        <EditAlbumModal album={albumId} />
                        <button className='delete-album-button' onClick={deleteAlbum}>Delete Album</button>
                        <CreateSongModal />
                    </div>
                )
            }
            <div className='edit-album-container'>
                <div className='edit-album-image-container'>
                    <img className='edit-album-image' src={album.previewImage} />
                </div>
                <div className='edit-album-details'>
                    <h4 className='album-title'>{album.description}</h4>
                </div>
            </div>
            <div className='album-songs'>
                {albumSongs && albumSongs.map((song, idx) => {
                    return (
                        <NavLink key={song.id} to={`/songs/${song.id}`} className='album-details-title'>
                        <div  className='album-song-row'>

                                {idx + 1}. {song.title}

                        </div>
                        </NavLink>
                    )
                }
                )}
            </div>
        </div>
    )

    return albumform;
}

export default AlbumDetails;
