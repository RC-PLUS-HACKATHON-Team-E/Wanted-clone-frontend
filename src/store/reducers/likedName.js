import { FETCH_LIKES_SUCCESS, FETCH_LIKES_FAILURE } from '../actions/likedName';

const initialState = {
  likesByPostId: {},
  error: null,
};

const likedNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIKES_SUCCESS:
      const { postId, likes } = action.payload;
      return {
        ...state,
        likesByPostId: {
          ...state.likesByPostId,
          [postId]: likes,
        },
        error: null,
      };
    case FETCH_LIKES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default likedNameReducer;
