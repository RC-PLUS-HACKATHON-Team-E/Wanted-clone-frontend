//action 설정

export const login = (name) => ({
  type: 'LOGIN',
  payload: { name },
});

export const logout = () => ({
  type: 'LOGOUT',
});

// export const updateuser = (payload) => ({
//   type: 'UPDATE_USER',
//   payload,
// });

export const validate = (email) => ({
  type: 'VALIDATE',
  payload: { email },
});