import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as albumActions from '../../store/album';

function EditAlbumForm({ setShowModal }) {

    // methods
    const dispatch = useDispatch();
    let { albumId } = useParams();
    const history = useHistory();
    const album = useSelector(state => state.albums[albumId]);

    // states
    const [errors, setErrors] = useState([])
    const [title, setTitle] = useState(album.title);
    const [description, setDescription] = useState(album.description);
    const [previewImage, setPreviewImage] = useState(album.previewImage);

    // onchange functions
    const updateTitle = e => {setTitle(e.target.value)};
    const updateDescription = e => setDescription(e.target.value);
    const updatePreviewImage = e => setPreviewImage(e.target.value);

    useEffect(() => {
        dispatch(albumActions.getAlbumById(albumId));
    }, [dispatch, albumId]);


    const previewImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewImage(file);
        }
    };

    // edit album
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([])

         dispatch(albumActions.putAlbum({
            id: album.id,
            title,
            description,
            previewImage
        }))
            .then(() => setShowModal(false))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className='edit-album'>Edit Album</h1>
                <ul>
                    {errors.map((error, idx) => { return <li key={error}>{error}</li> })}
                </ul>
                <input
                    className='edit-album-text-input'
                    type='text'
                    value={title}
                    onChange={updateTitle}
                />
                <input
                    className='edit-album-text-input'
                    type='text'
                    value={description}
                    onChange={updateDescription}
                />
                {/* <input
                    className='edit-album-text-input'
                    type='text'
                    value={previewImage}
                    onChange={updatePreviewImage}
                /> */}
                <input
                    type='file'
                    onChange={previewImageHandler}
                />
                <button className='button-edit-album-modal' type='submit'>Update Album</button>
            </form>
        </div>
    )

}

export default EditAlbumForm;
