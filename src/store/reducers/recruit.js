import { FETCH_RECRUIT_DATA_SUCCESS } from '../actions/recruit';

const initialState = {
  recruitData: null,
};

const recruitReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECRUIT_DATA_SUCCESS:
      return {
        ...state,
        recruitData: action.payload,
      };
    default:
      return state;
  }
};

export default recruitReducer;
