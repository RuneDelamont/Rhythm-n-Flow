import React, { useState, useEffect } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as songActions from '../../store/song';

function SongDetails() {

    // methods
    const dispatch = useDispatch();
    const { songId } = useParams();
    const history = useHistory();
    const song = useSelector(state => state.songs[songId]);
    const user = useSelector(state => state.session.user);

    // states
    const [disabled, setDisabled] = useState(true);
    const [title, setTitle] = useState(song.title);
    const [description, setDescription] = useState(song.description);
    const [url, setUrl] = useState(song.url);
    const [previewImage, setPreviewImage] = useState(song.previewImage);

    // onchange functions
    const updateTitle = e => setTitle(e.target.value);
    const updateDescription = e => setDescription(e.target.value);
    const updateUrl = e => setUrl(e.target.value);
    const updatePreviewImage = e => setPreviewImage(e.target.value);

    // initial data
    useEffect(() => {
        dispatch(songActions.getSongbyId(songId))
    }, [songId]);

    // disable/enable form
    const edit = () => {
        if (disabled === true) setDisabled(false);
        else setDisabled(true);
    }

    // delete song
    const deleteSong = (e) => {
        e.preventDefault();

        if (song.userId === user.id) {
            dispatch(songActions.deleteSong(song.id));
            history.push('/songs');
        }
    }

    // edit song
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

    let songform;

    // if user owns song, allow delete and edit
    if(song.userId === user.id){
        songform = (
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
                        value={title}
                        disabled={disabled}
                        onChange={updateTitle}
                    >
                    </input>
                    <input
                        type='text'
                        value={description}
                        disabled={disabled}
                        onChange={updateDescription}
                    >
                    </input>
                    <input
                        type='text'
                        value={url}
                        disabled={disabled}
                        onChange={updateUrl}
                    >
                    </input>
                    <input
                        type='text'
                        value={previewImage}
                        disabled={disabled}
                        onChange={updatePreviewImage}
                    >
                    </input>

                    <button type='submit'>Update song</button>
                </form>
            </div>
        );

    // else show data
    }else{
        songform = (
            <div className='song-details'>
                <h1>Song details</h1>
                <form className='edit-song-details' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={title}
                        disabled={disabled}
                        onChange={updateTitle}
                    >
                    </input>
                    <input
                        type='text'
                        value={description}
                        disabled={disabled}
                        onChange={updateDescription}
                    >
                    </input>
                    <input
                        type='text'
                        value={url}
                        disabled={disabled}
                        onChange={updateUrl}
                    >
                    </input>
                    <input
                        type='text'
                        value={previewImage}
                        disabled={disabled}
                        onChange={updatePreviewImage}
                    >
                    </input>

                </form>
            </div>
        );
    }

    return songform;
}

export default SongDetails;
