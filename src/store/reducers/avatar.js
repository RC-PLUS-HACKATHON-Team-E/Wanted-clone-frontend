const initialState = {
  isAvatarOpen: false,
};

export const avatarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_AVATAR':
      return {
        ...state,
        isAvatarOpen: true,
      };
    case 'CLOSE_AVATAR':
      return {
        ...state,
        isAvatarOpen: false,
      };
    default:
      return state;
  }
};
