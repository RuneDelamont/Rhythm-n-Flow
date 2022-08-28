import { csrfFetch } from "./csrf";

const SET_SONG = 'song/setSong';
const REMOVE_SONG = 'song/removeSong';

const setSong = song => {
    return {
        type: SET_SONG,
        song
    };
};

const removeSong = () => {
    return {
        type: REMOVE_SONG
    };
};


export const addSong = (albumId, song) => async dispatch => {
    const { title, description, url, imageUrl } = song;

    const response = await csrfFetch(`/songs/${albumId}`,{
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
    const { id, title, description, url, imageUrl } = song;

    const response = await csrfFetch(`/songs/${id}`, {
        method: 'PUT',
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

export const deleteSong = id => async dispatch => {

    const response = await csrfFetch(`/songs/${id}`, {
        method: 'DELETE'
    });

    const data = await response.json();
    dispatch(removeSong(data));
    return response;
};


const initialState = { song: null };

const songReducer = (state = initialState, action) => {
    let newState = state;

    switch(action.type){
        case SET_SONG:
            newState = Object.assign({}, state);
            newState.song = action.song;
            return newState;
        case REMOVE_SONG:
            newState = Object.assign({}, state);
            newState.song = null;
            return newState;
        default:
            return state;
    }
}

export default songReducer;
