import axios from "axios";
import actions from './authActions'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}
const register = dataUser => async dispatch => {
    dispatch(actions.registerRequest())
    try {
        const respons = await axios.post('users/signup', dataUser);

        token.set(respons.data.token)
        dispatch(actions.registerSuccess(respons.data))
    } catch (error) {
        
        dispatch(actions.registerError(error.message))
    }
}
const login = dataUser => async dispatch => {
    dispatch(actions.loginRequest());
    try {
        const respons = await axios.post('/users/login', dataUser);
        token.set(respons.data.token)
        dispatch(actions.loginSuccess(respons.data))
    } catch (error) {
        dispatch(actions.loginError(error))
    }
}

const LogOut = () => async dispatch => {
dispatch(actions.logoutRequest());
    try {
        await axios.post('/users/logout');
        token.unset()
        dispatch(actions.logoutSuccess())
    } catch (error) {
        dispatch(actions.logoutError(error))
    }
}
const getUser = () => async (dispatch, getState) => {
    const {authReducer: {token: persistedToken}} = getState()
    if (!persistedToken) {
        return
    }
    token.set(persistedToken)

    dispatch(actions.getUserRequest());
    try {
        const respons = await axios.get('/users/current');
        dispatch(actions.getUserSuccess(respons.data))
    } catch (error) {
        dispatch(actions.getUserError(error.message))
    }
}


const listOperations = {
    register,
    login,
    LogOut,
    getUser
}
export default listOperations