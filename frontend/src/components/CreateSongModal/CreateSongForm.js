import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as songActions from '../../store/song';

function CreateSongForm({ setShowModal, albumId }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const albums = useSelector(state => Object.values(state.albums));
    // const defaultAlbum = albums.find(album => album.userId === user.id);
    // const userAlbums = albums.map(album => album.userId === user.id);

    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [previewImage, setPreviewImage] = useState('')
    // const [albumIdselect, setAlbumIdSelect] = useState(defaultAlbum.id)

    const createTitle = e => setTitle(e.target.value);
    const createDescription = e => setDescription(e.target.value);
    const createPreviewImage = e => setPreviewImage(e.target.value);
    const createUrl = e => setUrl(e.target.value);

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     setErrors([]);
    //     let newSong;

    //     // if (albumId) {
    //     newSong = {
    //         albumId,
    //         title,
    //         description,
    //         url,
    //         previewImage
    //     }
    //     // } else {
    //     //     newSong = {
    //     //         albumIdselect,
    //     //         title,
    //     //         description,
    //     //         url,
    //     //         previewImage
    //     //     }
    //     // }

    //     return dispatch(songActions.addSong({
    //         albumId,
    //         title,
    //         description,
    //         url,
    //         previewImage
    //     }))
    //         .then(setShowModal(false))
    //         .catch(async res => {
    //             const data = await res.json();
    //             if (data && data.errors) setErrors(data.errors);
    //         })
    // }

    return (
        <form className='create-song-form' onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            {/* {!albumId && !userAlbums.length && (
                <select className='create-song-text'>
                    {userAlbums.map(album => {
                        return <option
                            value={album.id}
                            onChange={setAlbumIdSelect(album.id)}
                        >{album.title}
                        </option>
                    })}
                </select>
            )} */}
            <input
                className='create-song-text'
                type='text'
                placeholder='Song title'
                value={title}
                onChange={createTitle}
            ></input>
            <input
                className='create-song-text'
                type='text'
                placeholder='Song description'
                value={description}
                onChange={createDescription}
            ></input>
            <input
                className='create-song-text'
                type='text'
                placeholder='Song preview image'
                value={previewImage}
                onChange={createPreviewImage}
            ></input>
            <input
                className='create-song-text'
                type='text'
                placeholder='song url'
                value={url}
                onChange={createUrl}
            ></input>
            <button className='button-create-song-modal' type='submit'>Create song</button>
        </form>
    )
}

export default CreateSongForm;
