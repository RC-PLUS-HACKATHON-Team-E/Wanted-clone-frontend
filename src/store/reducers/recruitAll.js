import { FETCH_RECRUITS_SUCCESS, FETCH_RECRUITS_FAILURE } from '../actions/recruitAll';

const initialState = {
  recruits: [],
  error: null,
};

const recruitAllReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECRUITS_SUCCESS:
      return {
        ...state,
        recruits: action.payload,
        error: null,
      };
    case FETCH_RECRUITS_FAILURE:
      return {
        ...state,
        recruits: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default recruitAllReducer;
