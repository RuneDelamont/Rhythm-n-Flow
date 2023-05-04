import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as songActions from '../../store/song';
import EditSongModal from '../EditSongModal';
// import { songSRC, setSongSRC } from '../../context/Song';
import { useSong } from '../../context/Song';
import './SongDetails.css'

function SongDetails() {

    // methods
    const dispatch = useDispatch();
    let { songId } = useParams();
    songId = Number(songId);
    const history = useHistory();
    const songs = useSelector(state => state.songs);
    const user = useSelector(state => state.session.user);
    const song = songs[Number(songId)];
    const [ playOpacity, setPlayOpacity ] = useState(0);
    const { songSRC, setSongSRC } = useSong();

    // initial data
    useEffect(() => {
        // dispatch(songActions.getAllSongs());
        dispatch(songActions.getSongbyId(songId));
    }, [dispatch, songId]);


    // delete song
    const deleteSong = (e) => {
        e.preventDefault();

        if (song.userId === user.id) {
            dispatch(songActions.deleteSong(song.id));
            history.push('/songs');
        }
    }


    let songform = (
        <div className='song-details-content'>
            <h1 className='song-header'>{song.title}</h1>
            {(user.id === song.userId) &&
                (
                    <div className='song-button-divs'>
                        <EditSongModal song={songId} />
                        <button className='delete-song-button' onClick={deleteSong}>Delete Song</button>
                    </div>
                )
            }
            <div className='edit-song-container'>
                <div className='edit-song-image-container'
                    onMouseEnter={() => {setPlayOpacity(1)}}
                    onMouseLeave={() => {setPlayOpacity(0)}}

                >
                    <img className='song-play-button'
                        src='https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/playbutton.png'
                        style= {{ opacity: playOpacity }}
                        onClick={() => { setSongSRC(song.url); }}
                    ></img>
                    <img className='edit-song-image'
                        src={song.imageUrl}  
                    />
                </div>
                <div className='edit-song-details'>
                    <h3 className='song-description-details'>{song.description}</h3>
                </div>
            </div>
        </div>
    );
    return songform;
}

export default SongDetails;
