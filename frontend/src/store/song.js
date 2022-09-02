import { csrfFetch } from "./csrf";

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

    const data = await response.json();
    dispatch(getSongs(data));
    return Object.values(response);
}


export const getSongbyId = (id) => async dispatch => {
    const response = await csrfFetch(`/songs/${id}`);

    const data = await response.json();
    dispatch(setSong(data));
    return response;
}


export const addSong = (albumId, song) => async dispatch => {
    const { title, description, url, imageUrl } = song;

    const response = await csrfFetch(`/songs/${albumId}`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
            url,
            imageUrl
        })
    });

    const data = await response.json();
    dispatch(setSong(data));
    return response;

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

    if(response.ok){
        const data = await response.json();
        dispatch(updateSong(data));
        return response;
    }
};

export const deleteSong = id => async dispatch => {


    const response = await csrfFetch(`/songs/${id}`, {
        method: 'DELETE'
    });

    // console.log(response);

    if (response.ok) {
        await response.json();
        dispatch(removeSong(id));
        return response;
    }
};


const initialState = { };

const songReducer = (state = initialState, action) => {
    let newState = state;

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
            newState = {};
            action.songs.Songs.forEach(song => {
                newState[song.id] = song;
            });
            return newState;
        case GET_SONG:
            newState = { ...state };
            return newState[action.id];
        case UPDATE_SONG:
            newState = { ...state };
            newState[action.song.id] = action.song;
            return newState;
        default:
            return state;
    }
}

export default songReducer;
