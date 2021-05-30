import {LOGIN, LOGOUT, UPDATE_LIKED_CARS, UPDATE_LOADING} from './actionTypes';

export const login = data => dispatch => {
  dispatch({type: LOGIN, payload: data});
};

export const logout = () => dispatch => {
  dispatch({type: LOGOUT});
};
export const updateLoading = data => dispatch => {
  dispatch({type: UPDATE_LOADING, payload: data});
};
export const updateLikedCars = data => dispatch => {
  dispatch({type: UPDATE_LIKED_CARS, payload: data});
};
