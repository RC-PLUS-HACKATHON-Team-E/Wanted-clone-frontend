// store/reducers/auth.js

const initialState = {
  isLoggedIn: false,
  user: null,
  userEmail: null //로그인할때 저장할 유저의 다른정보가 필요없다면 사용안해도됨
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: null,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SIGNIN':
      return {
        ...state,
        userEmail: action.payload.email, // 이메일 정보 저장
      };
    default:
      return state;
  }
}
