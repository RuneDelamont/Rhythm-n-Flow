import { csrfFetch } from "./csrf";
import * as albumActions from './album';

const GET_SONGS = 'song/getSongs';
const GET_SONG = 'song/getSong';
const SET_SONG = 'song/setSong';
const REMOVE_SONG = 'song/removeSong';
const UPDATE_SONG = 'song/updateSong';

const getSongs = (songs) => {
    return {
        type: GET_SONGS,
        songs
    }
};

const getSong = (song) => {
    return {
        type: GET_SONG,
        song
    }
}

const setSong = song => {
    return {
        type: SET_SONG,
        song
    };
};

const removeSong = (id) => {
    return {
        type: REMOVE_SONG,
        id
    };
};

const updateSong = (song) => {
    return {
        type: UPDATE_SONG,
        song
    }
}

export const getAllSongs = () => async dispatch => {
    const response = await csrfFetch('/songs');

    if (response.ok) {
        const data = await response.json();
        dispatch(getSongs(data.Songs));
        return response;
    }
}


export const getSongbyId = (id) => async dispatch => {
    const response = await csrfFetch(`/songs/${id}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(getSong(data));
        return response;
    }
}


export const addSong = (song, albumId) => async dispatch => {
    // const { title, description, url, imageUrl } = song;

    // let album = albumActions.getAlbumById(albumId);

    const response = await csrfFetch(`/songs/${albumId}`, {
        method: 'POST',
        body: JSON.stringify(song)
    });

    if(response.ok){
        const data = await response.json();
        dispatch(setSong(data));
        return response;
    }
};

export const putSong = song => async dispatch => {
    const { id, title, description, url, previewImage } = song;

    const response = await csrfFetch(`/songs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            description,
            url,
            previewImage
        })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(updateSong(data));
        return response;
    }
};

export const deleteSong = id => async dispatch => {


    const response = await csrfFetch(`/songs/${id}`, {
        method: 'DELETE'
    });


    if (response.ok) {
        await response.json();
        dispatch(removeSong(id));
        return response;
    }
};


let newState = {};

const songReducer = (state = newState, action) => {


    switch (action.type) {
        case SET_SONG:
            newState = { ...state };
            newState[action.song.id] = action.song;
            return newState;
        case REMOVE_SONG:
            newState = { ...state };
            delete newState[action.id];
            return newState;
        case GET_SONGS:
            newState = { ...state };
            action.songs.forEach(song => {
                newState[song.id] = song;
            });
            return newState;
        case GET_SONG:
            return {
                ...state,
                [action.song.id] : action.song
            }
        case UPDATE_SONG:
            return {
                ...state,
                [action.song.id]: action.song
            };
        default:
            return state;
    }
}

export default songReducer;
