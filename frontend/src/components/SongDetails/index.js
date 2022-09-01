import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as songActions from '../../store/song';

function SongDetails() {

    const dispatch = useDispatch();
    const { songId } = useParams();
    const song = useSelector(state => state.songs[songId]);
    console.log(typeof songId)
    console.log(song);

    const [disabled, setDisabled] = useState(true);
    const [title, setTitle] = useState(song.title);
    const [description, setDescription] = useState(song.description);
    const [url, setUrl] = useState(song.url);
    const [previewImage, setPreviewImage] = useState(song.previewImage);

    const updateTitle = e => setTitle(e.target.value);
    const updateDescription = e => setDescription(e.target.value);
    const updateUrl = e => setUrl(e.target.value);
    const updatePreviewImage = e => setPreviewImage(e.target.value);

    useEffect(() => {
        dispatch(songActions.getSongbyId(songId))
    }, [songId]);

    const edit = () => {
        if (disabled === true) setDisabled(false);
        else setDisabled(true);
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        const songNum = Number(songId);

        dispatch(songActions.putSong({
            id: songNum,
            albumId: song.albumId,
            title,
            description,
            url,
            previewImage
        }));

        edit();

    }

    return (
        <div className='song-details'>
            <h1>Song details</h1>
            <button onClick={edit}>Edit</button>
            <form className='edit-song-details' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder={song.title}
                    // value=
                    disabled={disabled}
                    onChange={updateTitle}
                >
                </input>
                <input
                    type='text'
                    placeholder={song.description}
                    // value=
                    disabled={disabled}
                    onChange={updateDescription}
                >
                </input>
                <input
                    type='text'
                    placeholder={song.url}
                    // value=
                    disabled={disabled}
                    onChange={updateUrl}
                >
                </input>
                <input
                    type='text'
                    placeholder={song.previewImage}
                    // value=
                    disabled={disabled}
                    onChange={updatePreviewImage}
                >
                </input>
                <button type='submit'>Update song</button>
            </form>
        </div>
    );
}

export default SongDetails;
