import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as albumActions from '../../store/album';
import EditAlbumModal from '../EditAlbumModal';
import CreateSongModal from '../CreateSongModal/CreateSongForm';
import './AlbumDetails.css';

function AlbumDetails() {

    // methods
    const dispatch = useDispatch();
    let { albumId } = useParams();
    const history = useHistory();
    const album = useSelector(state => state.albums[albumId]);
    const user = useSelector(state => state.session.user);

    // initial data
    useEffect(() => {
        dispatch(albumActions.getAlbumById(albumId));
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
                    </div>
                )
            }
            <div className='edit-album-container'>
                <div className='edit-album-image-container'>
                    <img className='edit-album-image' src={album.previewImage} />
                </div>
                <div className='edit-album-details'>
                    <p>{album.description}</p>
                </div>
            </div>
        </div>
    )

    return albumform;
}

export default AlbumDetails;
