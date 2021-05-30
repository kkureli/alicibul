import * as actionTypes from './actionTypes';

const initialState = {
  logged: false,
  loginType: null,
  loading: false,
  likedCars: [1],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        logged: true,
        loginType: action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        logged: false,
        loginType: null,
      };
    case actionTypes.UPDATE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case actionTypes.UPDATE_LIKED_CARS:
      return {
        ...state,
        likedCars: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
