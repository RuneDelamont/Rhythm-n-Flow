import React, { useState, useEffect } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as songActions from '../../store/song';

function SongDetails() {

    const dispatch = useDispatch();
    const { songId } = useParams();
    const history = useHistory();
    const song = useSelector(state => state.songs[songId]);
    // console.log(song);
    const user = useSelector(state => state.session.user);


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

    // disable/enable edit song form
    const edit = () => {
        if (disabled === true) setDisabled(false);
        else setDisabled(true);
    }

    const deleteSong = (e) => {
        e.preventDefault();

        if (song.userId === user.id) {
            console.log(song.id);
            dispatch(songActions.deleteSong(song.id));
            history.push('/songs');
        }
    }

    // submit new song
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
            {(user.id === song.userId) &&
                (
                    <div className='button-divs'>
                        <button onClick={edit}>Edit Song</button>
                        <button onClick={deleteSong}>Delete Song</button>
                    </div>
                )
            }
            <form className='edit-song-details' onSubmit={handleSubmit}>
                <input
                    type='text'
                    // placeholder={title}
                    value={title}
                    disabled={disabled}
                    onChange={updateTitle}
                >
                </input>
                <input
                    type='text'
                    // placeholder={description}
                    value={description}
                    disabled={disabled}
                    onChange={updateDescription}
                >
                </input>
                <input
                    type='text'
                    // placeholder={url}
                    value={url}
                    disabled={disabled}
                    onChange={updateUrl}
                >
                </input>
                <input
                    type='text'
                    // placeholder={previewImage}
                    value={previewImage}
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
