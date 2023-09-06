// store/reducers/auth.js

const initialState = {
  isLoggedIn: false,
  user: {
    name: null, //���� �̸���(��ȿ���˻��Ҷ��� �̸��ϰ� ����)-> �α��ε� ������������ ����
    // password : null,
  },
  userEmail: null //�α����Ҷ� ������ ������ �ٸ������� �ʿ���ٸ� �����ص���
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
        userEmail: action.payload.email, // ȸ�����Խ� �ҷ��� �̸��� ���� && �α����Ҷ� ������ �̸�������
      };
    default:
      return state;
  }
}
