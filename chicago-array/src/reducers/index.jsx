import { SIGNIN_START, SIGNIN_SUCCESS, SIGNIN_FAILURE, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE, FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, SIGN_OUT } from '../actions';

const initialState = {
    caotData: '',
    username: '',
    password: '',
    signingUp: false, 
    signedUp: false,
    loggingIn: false,
    message: '',
    isLoggedIn: false,
    fetchingData: false,
    error: '',
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
            message: 'YOU SIGNED IN SUCESSFULLY!' 
        }
        case SIGNIN_SUCCESS:
        return {
            ...state,
            loggingIn: false, 
            isLoggedIn: true,
            signedUp: false,
            message: '',
        }
        case SIGNIN_FAILURE:
        return {
            ...state,
            loggingIn: false,
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
            isLoggedIn: false,
            caotData: action.payload,
        }
        case FETCH_FAILURE: 
        return {
            ...state,
            fetchingData: false,
            error: action.payload
        }
        case SIGN_OUT:
        return {
            caotData: [],
            username: '',
            password: '',
            signingUp: false, 
            loggingIn: false,
            isLoggedIn: false,
            fetchingData: false,
            error: '',
        }
    default: return state
    }
}