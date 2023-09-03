//action 설정

export const login = () => ({
  type: 'LOGIN',
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const updateuser = (payload) => ({
  type: 'UPDATE_USER',
  payload,
});
