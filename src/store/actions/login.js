//action 설정

export const login = (name, password) => ({
  type: 'LOGIN',
  payload: { name, password },
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const updateuser = (payload) => ({
  type: 'UPDATE_USER',
  payload,
});

export const signin = (email) => ({
  type: 'SIGNIN',
  payload: { email },
});