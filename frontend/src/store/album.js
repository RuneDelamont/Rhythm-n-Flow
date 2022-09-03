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
    const response = await csrfFetch('/albums');

    if (response.ok) {
        const data = await response.json();
        dispatch(getAlbums(data.Albums));
        return (response);
    }
};

export const getAlbumById = id => async dispatch => {
    const response = await csrfFetch(`/albums/${id}`);

    if(response.ok){
        const data = await response.json();
        dispatch(getAlbum(data));
        return response;
    }
}

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

    if (response.ok) {
        const data = await response.json();
        dispatch(setAlbum(data));
        return response;
    }
}

export const putAlbum = album => async dispatch => {
    const { id, title, description, previewImage } = album;

    const response = await csrfFetch(`/albums/${id}`, {
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

    const response = await csrfFetch(`/albums/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        await response.json();
        dispatch(removeAlbum(id));
        return response;
    }
}

const initialState = { };

const albumReducer = (state = initialState, action) => {
    let newState = {};

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
            newState = { ...state };
            action.albums.forEach(album => {
                newState[album.id] = album;
            });
            return newState;
        case GET_ALBUM:
            newState = { ...state };
            return newState[action.album.id]
        default:
            return state;
    }
};

export default albumReducer;
