import { csrfFetch } from "./csrf";

const SET_ALBUM = 'album/setAlbum';
const REMOVE_ALBUM = 'album/removeAlbum';
const GET_ALBUMS = 'album/getAlbums';
const GET_ALBUM = 'album/getAlbum';

const setAlbum = (album) => {
    return {
        type: SET_ALBUM,
        album
    };
};

const removeAlbum = (id) => {
    return {
        type: REMOVE_ALBUM,
        id
    };
};

const getAlbums = (albums) => {
    return {
        type: GET_ALBUMS,
        albums
    }
}

const getAlbum = album => {
    return {
        type: GET_ALBUM,
        album
    };
};

export const getAllAlbums = () => async dispatch => {
    const response = await csrfFetch('/api/albums');

    if (response.ok) {
        const data = await response.json();
        dispatch(getAlbums(data.Albums));
        return (response);
    }
};

export const getAlbumById = id => async dispatch => {
    const response = await csrfFetch(`/api/albums/${id}`);

    if(response.ok){
        const data = await response.json();
        dispatch(getAlbum(data));
        return response;
    }
}

export const addAlbum = album => async dispatch => {
    const response = await csrfFetch('/api/albums', {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(album)
    });

    if(!response) return null;

    if (response.ok) {
        const data = await response.json();
        dispatch(setAlbum(data));
        return response;
    }
}

export const putAlbum = album => async dispatch => {
    const { id, title, description, previewImage } = album;

    const response = await csrfFetch(`/api/albums/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            description,
            previewImage
        })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(setAlbum(data));
        return response;
    }
}

export const deleteAlbum = id => async dispatch => {

    const response = await csrfFetch(`/api/albums/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        await response.json();
        dispatch(removeAlbum(id));
        return response;
    }
}

let newState = {};

const albumReducer = (state = newState, action) => {


    switch (action.type) {
        case SET_ALBUM:
            newState = { ...state };
            newState[action.album.id] = action.album;
            return newState;
        case REMOVE_ALBUM:
            newState = { ...state };
            delete newState[action.id];
            return newState;
        case GET_ALBUMS:
            newState = { };
            action.albums.forEach(album => {
                newState[album.id] = album;
            });
            return newState;
        case GET_ALBUM:
            return {...state,
                [action.album.id] : action.album
            }
        default:
            return state;
    }
};

export default albumReducer;
