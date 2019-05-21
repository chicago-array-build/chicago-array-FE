import { SIGNIN_START, SIGNIN_SUCCESS, SIGNIN_FAILURE, SIGNUP_START, SIGNUP_FAILURE } from '../actions';

const initialState = {
    unknownfornow: [],
    username: '',
    password: '',
    signingUp: false, 
    loggingIn: false,
    error: '',
}


export default function reducer(state = initialState, action){
    switch(action.type){
        case SIGNIN_START:
        return {
            ...state,
            loggingIn: true,
        }
        case SIGNIN_SUCCESS:
        return {
            ...state,
            loggingIn: false, 
        }
        case SIGNIN_FAILURE:
        return {
            ...state,
            loggingIn: false,
        }
        case SIGNUP_START:
        return {
            ...state, 
            signingUp: true, 
        }
        case SIGNUP_FAILURE:
        return {
            ...state,
            signingUp: false,
        }
    default: return state
    }
}