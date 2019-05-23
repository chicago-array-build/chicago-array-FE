import { CHECK_AUTH_START, CHECK_AUTH_SUCCESS, CHECK_AUTH_FAILURE, SIGNIN_START, SIGNIN_SUCCESS, SIGNED_IN, SIGNIN_FAILURE, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE, FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, SAVE_URL_START, SAVE_URL_SUCCESS, SIGN_OUT } from '../actions';

const initialState = {
    caotData: '',
    caotDataHistory: ['https://plot.ly/~chris/1638'],
    username: '',
    password: '',
    message: '',
    error: '',
    signingUp: false, 
    signedUp: false,
    loggingIn: false,
    isLoggedIn: false,
    fetchingData: false,
    savingURL: false,
    savedURL: true,
}


export default function reducer(state = initialState, action){
    switch(action.type){
        // SIGNUP
        case SIGNUP_START:
        return {
            ...state, 
            signingUp: true, 
            error: '',
            message: 'YOU SIGNED UP SUCCESSFULLY!, PLEASE SIGN IN!'
        }
        case SIGNUP_SUCCESS: 
        return {
            ...state,
            signingUp: false,
            signedUp: true,
        }
        case SIGNUP_FAILURE:
        return {
            ...state,
            signingUp: false,
            error: action.payload,
        }
        // SIGNIN
        case SIGNIN_START:
        return {
            ...state,
            loggingIn: true,
            error: '',
        }
        case SIGNIN_SUCCESS:
        return {
            ...state,
            loggingIn: false, 
            isLoggedIn: true,
            signedUp: false,
            // checkAuthFailed: true,
            message: 'YOU SIGNED IN SUCESSFULLY!' 
        }
        case SIGNED_IN:
        return {
            ...this,
            message: '',
        }
        case SIGNIN_FAILURE:
        return {
            ...state,
            loggingIn: false,
            message: '',
            error: action.payload,
        }
        // FETCH
        case FETCH_START:
        return {
            ...state, 
            fetchingData: true,
            isLoggedIn: true,
            error: '',
        }
        case FETCH_SUCCESS:
        return {
            ...state,
            fetchingData: false,
            isLoggedIn: true,
            caotData: action.payload,
        }
        case FETCH_FAILURE: 
        return {
            ...state,
            fetchingData: false,
            error: action.payload
        }
        case CHECK_AUTH_START:
        return {
            ...state,
            loggingIn: true,
            error: '',
        }
        case CHECK_AUTH_SUCCESS:
        return {
            ...state,
            loggingIn: false,
            isLoggedIn: action.payload,
            error: '',
        }
        case CHECK_AUTH_FAILURE:
        return {
            ...state,
            isLoggedIn: false,
            error: action.payload,
        }
        case SAVE_URL_START:
        return {
            ...state,
            error: '',
            savingURL: true,
        }
        case SAVE_URL_SUCCESS:
        return {
            ...state,
            savingURL: false,
            savedURL: true,
            caotDataHistory: [...state.caotDataHistory, action.payload]
        }
        case SIGN_OUT:
        return {
            caotData: '',
            caotDataHistory: ['https://plot.ly/~chris/1638',],
            username: '',
            password: '',
            message: '',
            error: '',
            signingUp: false, 
            signedUp: false,
            loggingIn: false,
            isLoggedIn: false,
            fetchingData: false,
            savingURL: false,
            savedURL: true,
        }
    default: return state
    }
}