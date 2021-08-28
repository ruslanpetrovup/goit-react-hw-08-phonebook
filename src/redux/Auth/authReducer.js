import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from './authActions'

const userState = {name: null, email: null}

const user = createReducer(userState, {
    [actions.registerSuccess]: (_, { payload }) => {
        return payload.user
    },
    [actions.loginSuccess]: (_, { payload }) => {
        return payload.user
    },
    [actions.logoutSuccess]: (_, __) => userState,
    [actions.getUserSuccess]: (_,{payload})=> payload
});

const token = createReducer(null, {
    [actions.registerSuccess]: (_, { payload }) => {
        return payload.token
    },
    [actions.loginSuccess]: (_, { payload }) => {
        return payload.token
    },
    [actions.logoutSuccess]: (_,__) => null
});

const error = createReducer(null, {
    [actions.registerError]: (_, { payload }) => payload,
    [actions.loginError]: (_, { payload }) => payload,
    [actions.logoutError]: (_, { payload }) => payload,
    [actions.getUserError]:(_, {payload}) => payload
    
    
});
const isActive = createReducer(false, {
    [actions.registerSuccess]: () => true,
    [actions.loginSuccess]: () => true,
    [actions.getUserSuccess]: () => true,
    [actions.registerError]: () => false,
    [actions.getUserError]: () => false,
    [actions.loginError]: () => false,
    [actions.logoutSuccess]: () => false,

})
export default combineReducers({
    user,
    isActive,
    token,
    error,
})