import axios from "axios";

import { axiosWithAuth } from '../components/authorization/axiosWithAuth';


// CHECK AUTH
export const CHECK_AUTH_START = 'CHECK_AUTH_START';
export const CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS';
export const CHECK_AUTH_FAILURE = 'CHECK_AUTH_FAILURE';

export const checkAuth = () => dispatch => {
    dispatch({ type: CHECK_AUTH_START })
    if(localStorage.getItem('preciousToken')){
        // console.log(localStorage.getItem('preciousToken'))
    dispatch({ type: CHECK_AUTH_SUCCESS, payload: true})
    }
    if(!localStorage.getItem('preciousToken')){
        dispatch({ type: CHECK_AUTH_FAILURE })
    }
}


// SignUP
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNED_IN = 'SIGNED_IN';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signUp = (creds) => dispatch => {
    // console.log(creds)
    dispatch({ type: SIGNUP_START })
        axios
        .post('https://chicago-aot.herokuapp.com/api/auth/register', creds)
        .then(res => {
            // console.log(res);
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
        })
        .then(() => {
            dispatch({ type: SIGNED_IN })
        })
        .catch(err => {
            // console.log(err.response);
            dispatch({ type: SIGNUP_FAILURE, payload: `${err.response.status}: ${err.response.statusText || "CRAZY UNKNOWN ERROR"}` })
        })
}

// SignIN
export const SIGNIN_START = 'SIGNIN_START';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const signIn = (creds) => dispatch => {
    dispatch({ type: SIGNIN_START })
    return axiosWithAuth()
        .post('https://chicago-aot.herokuapp.com/api/auth/login', creds)
        .then(res => {
            // console.log(res);
            localStorage.setItem('preciousToken', res.data.token)
            dispatch({ type: SIGNIN_SUCCESS, payload: res.data.token })
            
        })
        .catch(err => {
            // console.log(err.response);
            dispatch({ type: SIGNIN_FAILURE, payload: `${err.response.status}: ${err.response.statusText || "CRAZY UNKNOWN ERROR"}` })
        })
}

// Fetch
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchData = (dataObj) => dispatch => {
    dispatch({ type: FETCH_START })
    // console.log(dataObj)
    return axios
        .post('https://chicago-aot.herokuapp.com/api/nodes', dataObj)
        .then(res => {
            // console.log(res);
            dispatch({ type: FETCH_SUCCESS, payload: res.data.url })
        })
        .catch(err => {
            // console.log(err.response);
            dispatch({ type: FETCH_FAILURE, payload: `${err.response.status} ${err.response.statusText}` })
        })
}

// Save History
export const SAVE_URL_START = 'SAVE_URL_START';
export const SAVE_URL_SUCCESS = 'SAVE_URL_SUCCESS';
export const saveURL = (url) => dispatch => {
    dispatch({ type: SAVE_URL_START })
    // console.log(url)
    dispatch({ type: SAVE_URL_SUCCESS, payload: url })
}


// SIGN OUT
export const SIGN_OUT = 'SIGN_OUT';
export const signOut = () => dispatch => {
    dispatch({ type: SIGN_OUT })
    localStorage.removeItem('preciousToken');
}

