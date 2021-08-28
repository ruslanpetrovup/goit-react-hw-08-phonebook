import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const getUserRequest = createAction('auth/getUserRequest');
const getUserSuccess = createAction('auth/getUserSuccess');
const getUserError = createAction('auth/getUserError');



const listActions = {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getUserRequest,
    getUserSuccess,
    getUserError
}
export default listActions