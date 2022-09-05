import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as albumActions from '../../store/album';
import CreateAlbumModal from '../CreateAlbumModal';
import './Albums.css';

function AlbumsPage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const albums = useSelector(state => Object.values(state.albums));

    useEffect(() => {
        dispatch(albumActions.getAllAlbums())
    }, [dispatch])

    if (!user) return (
        <Redirect to='/' />
    );

    if (!albums) return null;

    return (
        <div className='album-content'>
            <h1 className='album-header'>Albums</h1>
            {albums && albums.map((album) => {
                return (
                    <div className='album-row' key={album.id}>
                        <div className='album-image-container'>
                            <div className='album-image-content'>
                                <img className='album-image'src={album.previewImage} alt={album.title} />
                            </div>
                        </div>
                        <div className='album-details'>
                            <div className='album-title'>
                                <NavLink className='album-title-nav' to={`/albums/${album.id}`}>{album.title}</NavLink>
                            </div>
                            <div className='album-description'>{album.description}</div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default AlbumsPage;
