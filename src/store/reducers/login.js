// store/reducers/auth.js

const initialState = {
  isLoggedIn: false,
  user: {
    name: null, //유저 이메일(유효성검사할때의 이메일과 별개)-> 로그인된 유저정보만이 저장
    // password : null,
  },
  userEmail: null //로그인할때 저장할 유저의 다른정보가 필요없다면 사용안해도됨
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: {
          name: action.payload.name,
          // password : action.payload.password,
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: {
          name: null,
          // password : null
        },
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'VALIDATE':
      return {
        ...state,
        userEmail: action.payload.email, // 회원가입시 불러올 이메일 정보 && 로그인할때 전달할 이메일정보
      };
    default:
      return state;
  }
}
