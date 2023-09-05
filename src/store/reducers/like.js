const initialState = {
  likeCount: 3,
};

export const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LIKE_COUNT':
      return {
        ...state,
        likeCount: action.payload,
      };
    default:
      return state;
  }
};
