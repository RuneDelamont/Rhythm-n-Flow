import { csrfFetch } from "./csrf";

const SET_ALBUM = 'album/setAlbum';
const REMOVE_ALBUM = 'album/removeAlbum';

const setAlbum = (album) => {
    return {
        type: SET_ALBUM,
        album
    };
};

const removeAlbum = () => {
    return {
        type: REMOVE_ALBUM
    };
};

export const addAlbum = album => async dispatch => {
    const { title, description, previewImage } = album;
    const response = await csrfFetch('/albums', {
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
            previewImage
        })
    });

    const data = await response.json();

    dispatch(setAlbum(data));
    return response;
}

export const putAlbum = album => async dispatch => {
    const {id,  title, description, previewImage } = album;

    const response = await csrfFetch(`/albums/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            description,
            previewImage
        })
    });

    const data = await response.json();
    dispatch(setAlbum(data));
    return response;
}

export const deleteAlbum = id => async dispatch => {

    const response = await csrfFetch(`/albums/${id}`, {
        method: 'DELETE'
    });

    const data = await response.json();
    dispatch(removeAlbum());
    return response;
}

const initialState = { album: null };

const albumReducer = ( state = initialState, action ) => {
    let newState;

    switch(action.type){
        case SET_ALBUM:
            newState = Object.assign({}, state);
            newState.album = action.album;
            return newState;
        case REMOVE_ALBUM:
            newState = Object.assign({}, state);
            newState.album = null;
            return newState;
        default:
            return state;
    }
};

export default albumReducer;
