
import {
    LOGIN_REQUEST,
    SUCCESS,
    FAILURE,
    LOGOUT_REQUEST
} from './types';

export const authenticateUser = (email, password) => {
    return dispatch => {
        dispatch(loginRequest());
        if (email === "test@gmail.com" && password === "test") {
            dispatch(success(true));
        } else {
            dispatch(failure());
        }
    }
}

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const logoutUser = () => {
    return dispatch => {
        dispatch(logoutRequest());
        dispatch(success(false))
    }
}

export const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST
    }
}

export const success = isLoggedIn => {
    return {
        type: SUCCESS,
        payload: isLoggedIn
    }
}

export const failure = () => {
    return {
        type: FAILURE,
        payload: false
    }
}


