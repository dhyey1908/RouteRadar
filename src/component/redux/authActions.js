export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (email, userId) => ({
  type: LOGIN_SUCCESS,
  payload: { email, userId },
}
);
export const logout = () => ({
  type: LOGOUT,
});
