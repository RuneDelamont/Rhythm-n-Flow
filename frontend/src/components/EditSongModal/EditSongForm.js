import React, { useState, useEffect } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as songActions from '../../store/song';

function EditSongForm({ setShowModal }) {
    // methods
    const { songId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const song = useSelector(state => state.songs[songId]);

    // states
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState(song.title);
    const [description, setDescription] = useState(song.description);
    const [url, setUrl] = useState(song.url);
    const [imageUrl, setImageUrl] = useState(song.imageUrl);
    const [previewImage, setPreviewImage] = useState(song.previewImage);

    // onchange functions
    const updateTitle = e => setTitle(e.target.value);
    const updateDescription = e => setDescription(e.target.value);
    const updateUrl = e => setUrl(e.target.value);
    const updatePreviewImage = e => setPreviewImage(e.target.value);

    // initial data
    useEffect(() => {
        dispatch(songActions.getAllSongs())
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(songActions.putSong({
            id: song.id,
            albumId: song.albumId,
            title,
            description,
            url,
            imageUrl,
            previewImage
        }))
            .then(() => setShowModal(false))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    const updateImageUrlHandler = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImageUrl(file);
        }
    };

    const updateUrlHandler = e => {
        const file = e.target.files[0];

        if (file) {
            setUrl(file)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className='edit-song-header'>Edit Song</h1>
                <ul>
                    {errors.map((error) => { return <li key={error}>{error}</li> })}
                </ul>
                <input
                    className='edit-song-text-input'
                    type='text'
                    value={title}
                    onChange={updateTitle}
                />
                <input
                    className='edit-song-text-input'
                    type='text'
                    value={description}
                    onChange={updateDescription}
                />
                {/* <input
                    className='edit-song-text-input'
                    type='text'
                    value={url}
                    onChange={updateUrl}
                /> */}
                <div className='update-song-file-upload'>
                    <div className='song-update-upload'>
                        <label htmlFor='update-song-image'>Update Image: </label>
                        <input
                            type='file'
                            name='update-song-image'
                            onChange={updateImageUrlHandler}
                            required
                        />
                    </div>
                    <div className='song-update-upload'>
                        <label htmlFor='update-song-url'>Update song: </label>
                        <input
                            type='file'
                            name='update-song-url'
                            onChange={updateUrlHandler}
                            required
                        />
                    </div>
                </div>

                {/* <input
                    className='edit-song-text-input'
                    type='text'
                    value={previewImage}
                    onChange={updatePreviewImage}
                /> */}

                <button className='button-edit-song-modal' type='submit'>Update Song</button>
            </form>
        </div>
    )
}

export default EditSongForm;
