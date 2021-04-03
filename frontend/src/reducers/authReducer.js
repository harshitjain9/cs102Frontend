import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    UPDATE_SUCCESS,
    UPDATE_FAIL
} from "../actions/types";

const initialState = {
    jwt: localStorage.getItem('jwt'),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('jwt', action.payload.jwt);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('jwt');
            return {
                ...state,
                jwt: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case UPDATE_FAIL:
            return state
        default:
            return state
    }
}
