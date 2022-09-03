import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as albumActions from '../../store/album';
import './AlbumDetails.css';

function AlbumDetails() {

    // methods
    const dispatch = useDispatch();
    let { albumId } = useParams();
    // albumId = Number(albumId)
    const history = useHistory();
    const album = useSelector(state => state.albums[albumId]);
    const user = useSelector(state => state.session.user);
    console.log(album)

    // states
    const [disabled, setDisabled] = useState(true);
    const [title, setTitle] = useState(album.title);
    const [description, setDescription] = useState(album.description);
    const [previewImage, setPreviewImage] = useState(album.previewImage);

    // onchange functions
    const updateTitle = e => setTitle(e.target.value);
    const updateDescription = e => setDescription(e.target.value);
    const updatePreviewImage = e => setPreviewImage(e.target.value);

    // initial data
    useEffect(() => {
        dispatch(albumActions.getAllAlbums());
        // dispatch(albumActions.getAlbumById(albumId));
    }, [dispatch]);

    // disable/enable form
    const edit = () => {
        if (disabled === true) setDisabled(false);
        else setDisabled(true);
    }

    // delete album
    const deleteAlbum = (e) => {
        e.preventDefault();

        dispatch(albumActions.deleteAlbum(album.id));
        history.push('/albums');

    }

    // edit album
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(albumActions.putAlbum({
            id: album.id,
            title,
            description,
            previewImage
        }));

        edit();

    }
    // return(
    //     <h1>{album.title}</h1>
    // )

    let albumform;

    if (album.userId === user.id) {
        albumform = (
            <div className='album-details'>
                <h1>Album details</h1>
                <div className='album-button-divs'>
                    <button onClick={edit}>Edit Album</button>
                    <button onClick={deleteAlbum}>Delete Album</button>
                </div>
                <form className='edit-album-details' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={title}
                        disabled={disabled}
                        onChange={updateTitle}
                    ></input>
                    <input
                        type='text'
                        value={description}
                        disabled={disabled}
                        onChange={updateDescription}
                    ></input>
                    <input
                        type='text'
                        value={previewImage}
                        disabled={disabled}
                        onChange={updatePreviewImage}
                    ></input>
                    <button type='submit'>Update Album</button>
                </form>
            </div>
        )
    } else {
        albumform = (
            <div className='album-details'>
                <h1>Album details</h1>

                <form className='edit-album-details'>
                    <input
                        type='text'
                        value={title}
                        disabled={disabled}
                        onChange={updateTitle}
                    ></input>
                    <input
                        type='text'
                        value={description}
                        disabled={disabled}
                        onChange={updateDescription}
                    ></input>
                    <input
                        type='text'
                        value={previewImage}
                        disabled={disabled}
                        onChange={updatePreviewImage}
                    ></input>
                </form>
            </div>
        )
    }
    return albumform;
}

export default AlbumDetails;
