import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as albumActions from '../../store/album';
import './AlbumDetails.css';

function AlbumDetails() {

    // methods
    const dispatch = useDispatch();
    const { albumId } = useParams();
    const history = useHistory();
    const album = useSelector(state => state.albums[albumId]);
    const user = useSelector(state => state.session.user);

    // states
    const [disabled, setDisabled] = useState(true);
    // const [title, setTitle] = useState(album.title);
    // const [description, setDescription] = useState(album.description);
    // const [previewImage, setPreviewImage] = useState(album.previewImage);

    // onchange functions
    // const updateTitle = e => setTitle(e.target.value);
    // const updateDescription = e => setDescription(e.target.value);
    // const updatePreviewImage = e => setPreviewImage(e.target.value);

    // initial data
    // useEffect(() => {
    //     dispatch(albumActions.getAlbumById(albumId));
    // }, [albumId]);

    // disable/enable form
    const edit = () => {
        if (disabled === true) setDisabled(false);
        else setDisabled(true);
    }

    // delete song
    const deleteAlbum = (e) => {
        e.preventDefault();

        if (album.userId === user.id) {
            dispatch(albumActions.deleteAlbum(albumId));
            history.push('/albums');
        }
    }

    // edit album
    const handleSubmit = (e) => {
        e.preventDefault();

        // dispatch(albumActions.putAlbum({
        //     id: album.id,
        //     title,
        //     description,
        //     previewImage
        // }));

        edit();

    }

    let albumform;

    if(album.userId === user.id){
        albumform = (
            <div className='album-details'>
                <h1>Album details</h1>

            </div>
        )
    }


    return (
        <div className='album-details-container'>
            <h1>Album Details</h1>
        </div>
    )
}

export default AlbumDetails;
