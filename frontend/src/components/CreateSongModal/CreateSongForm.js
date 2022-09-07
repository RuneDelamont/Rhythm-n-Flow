import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as songActions from '../../store/song';
import * as albumActions from '../../store/album';

function CreateSongForm({ setShowModal, album}) {
    const dispatch = useDispatch();
    const history = useHistory();
    // const { albumId } = useParams();
    console.log(album);
    const user = useSelector(state => state.session.user);
    const albums = useSelector(state => Object.values(state.albums));
    // const defaultAlbum = albums.find(album => album.userId === user.id);
    const userAlbums = albums.filter(album => album.userId === user.id);
    // const album = useSelector(state => Object.values(state.albums[albumId]));
    // console.log(albumId);
    // console.log(userAlbums);

    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [imageUrl, setimageUrl] = useState('')
    // const [albumIdselect, setAlbumIdSelect] = useState(defaultAlbum.id)

    const createTitle = e => setTitle(e.target.value);
    const createDescription = e => setDescription(e.target.value);
    const createimageUrl = e => setimageUrl(e.target.value);
    const createUrl = e => setUrl(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);

        return dispatch(songActions.addSong({
            // albumId: albumId,
            title,
            description,
            url,
            imageUrl,
            // previewImage: album.previewImage
        }))
            .then(() => setShowModal(false))
            .catch(async rejected => {
                const data = await rejected.json();
                console.log(data.errors);
                if (data && data.errors) setErrors(data.errors);
            })
    }

    return (
        <form className='create-song-form' onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => { return <li key={idx}>{error}</li>})}
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
                value={imageUrl}
                onChange={createimageUrl}
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
