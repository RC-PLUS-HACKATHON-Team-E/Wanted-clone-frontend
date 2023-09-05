// store/reducers/auth.js

const initialState = {
  isLoggedIn: false,
  user: null,
  userEmail: null //�α����Ҷ� ������ ������ �ٸ������� �ʿ���ٸ� �����ص���
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
        userEmail: action.payload.email, // �̸��� ���� ����
      };
    default:
      return state;
  }
}
