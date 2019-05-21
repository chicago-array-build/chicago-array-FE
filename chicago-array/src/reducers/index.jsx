import { SIGNIN_START, SIGNIN_SUCCESS, SIGNIN_FAILURE, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE, FETCH_START } from '../actions';

const initialState = {
    caotData: [],
    username: '',
    password: '',
    signingUp: false, 
    loggingIn: false,
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
        }
        case SIGNUP_SUCCESS: 
        return {
            ...state,
            signingUp: false,
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
            error: '',
        }
        // case FETCH_SUCCESS:
        // return {
        //     ...state,
        //     fetchingData: false,
        //     caotData: action.payload,
        // }
        // case FETCH_FAILURE: 
        // return {
        //     ...state,
        //     fetchingData: false,
        //     error: action.payload
        // }
    default: return state
    }
}