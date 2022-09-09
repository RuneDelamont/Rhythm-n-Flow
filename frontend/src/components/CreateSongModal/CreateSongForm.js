import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as songActions from '../../store/song';
import * as albumActions from '../../store/album';
import './CreateSong.css';

function CreateSongForm({ setShowModal }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { albumId } = useParams();
    const user = useSelector(state => state.session.user);
    const albums = useSelector(state => Object.values(state.albums));
    const userAlbums = albums.filter(album => album.userId === user.id);
    const album = useSelector(state => Object.values(state.albums[albumId]));


    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [imageUrl, setimageUrl] = useState(album.previewImage)
    // const [albumIdselect, setAlbumIdSelect] = useState(defaultAlbum.id)

    const createTitle = e => setTitle(e.target.value);
    const createDescription = e => setDescription(e.target.value);
    const createimageUrl = e => setimageUrl(e.target.value);
    const createUrl = e => setUrl(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);

        const newSong = {
            title,
            description,
            url,
            imageUrl,
        }

        return dispatch(songActions.addSong(newSong, albumId))
            .then(() => history.push(`/albums`))
            .then(() => history.push(`/albums/${albumId}`))
            .then(() => dispatch(songActions.getAllSongs()))
            .then(() => history.push(`/albums`))
            .then(() => history.push(`/albums/${albumId}`))
            .then(() => setShowModal(false))
            .catch(async rejected => {
                const data = await rejected.json();
                // console.log(data.errors);
                if (data && data.errors) setErrors(data.errors);
            })
    }

    // const previewImageHandler = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     const newFile = URL.createObjectURL(file)

    //     if (file) {
    //         setimageUrl(newFile);
    //         // setImageText(file.name);

    //     }
    // };


    return (
        <form className='create-song-form' onSubmit={handleSubmit}>
            <h1 className='create-song-header'>Create Song</h1>
            <ul>
                {errors.map((error, idx) => { return <li key={idx}>{error}</li> })}
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
                placeholder='Album Image by default'
                value={album.previewImage}
                onChange={createimageUrl}
            ></input>
            {/* <input
                type='file'
                // value={previewImage}
                onChange={previewImageHandler}
            ></input> */}
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
