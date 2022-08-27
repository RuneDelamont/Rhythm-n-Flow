import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();

  if(!data) return null;

  dispatch(setUser(data));
  return response;
};

export const signup = user => async dispatch => {
    const { firstName, lastName, email, password, username } = user;

    const response = await csrfFetch('/users', {
        method: 'POST',
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
            username
        })
    });

    const data = await response.json();

    if(!data) return null;

    dispatch(setUser(data));
    return response;
}

export const createUser = (user) => async (dispatch) => {
  const { images, image, username, email, password } = user;
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);

  // for multiple files
  if (images && images.length !== 0) {
    for (var i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
  }

  // for single file
  if (image) formData.append("image", image);

  const res = await csrfFetch(`/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  const data = await res.json();
  dispatch(setUser(data.user));
};

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/session', {
        method: 'DELETE'
    });

    const data = await response.json();
    if(!data) return null;
    dispatch(removeUser())
    return response;
}

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
