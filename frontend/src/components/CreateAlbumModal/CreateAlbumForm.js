import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as albumActions from '../../store/album';
import defaultImage from '../../images/defaultImage.jpg'

function CreateAlbumForm({ setShowModal }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [previewImage, setPreviewImage] = useState('https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/catsoap.jpg');

    const createTitle = e => setTitle(e.target.value);
    const createDescription = e => setDescription(e.target.value);
    const createPreviewImage = e => setPreviewImage(e.target.value);

    const previewImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewImage(file);
        }
    };

    const handleSubmit = e => {

        e.preventDefault();
        setErrors([]);

        const newAlbum = {
            userId: user.id,
            title,
            description,
            previewImage
        }

        dispatch(albumActions.addAlbum(newAlbum))
            .then(() => setShowModal(false))
            .then(history.push('/albums'))
            .catch(async res => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });

    }

    return (
        <form className='create-album-form' onSubmit={handleSubmit}>
            <h1 className='create-album-header'>Create Album</h1>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <input
                className='create-album-text'
                type='text'
                placeholder='Album title'
                value={title}
                onChange={createTitle}
            ></input>
            <input
                className='create-album-text'
                type='text'
                placeholder='Album description'
                value={description}
                onChange={createDescription}
            ></input>
            {/* <input
                className='create-album-text'
                type='text'
                placeholder='Album preview Image'
                value={previewImage}
                onChange={createPreviewImage}
            ></input> */}
            <input
                type='file'
                // value={previewImage}
                onChange={previewImageHandler}
                required
            ></input>
            <button className='button-create-album-modal' type='submit'>Create Album</button>
        </form>
    )
}

export default CreateAlbumForm;
