import axios from "axios";



// import axios from 'axios';

import { axiosWithAuth } from '../components/authorization/axiosWithAuth';

export const SIGNUP_START = 'SIGNUP_START';
// export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signUp = (creds) => dispatch => {
    console.log(creds)
    dispatch({ type: SIGNUP_START })
        axios.post('https://chicago-aot.herokuapp.com/api/auth/register', creds)
        .then(res => {console.log(res)})
        .catch(err => {
            console.log(err.response);
            dispatch({ type: SIGNUP_FAILURE, payload: `${err.response.status}: ${err.response.statusText || "CRAZY UNKNOWN ERROR"}` })
        })
}



export const SIGNIN_START = 'SIGNIN_START';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const signIn = (creds) => dispatch => {
    dispatch({ type: SIGNIN_START })
    axiosWithAuth()
        .post('https://chicago-aot.herokuapp.com/api/auth/login', creds)
        .then(res => {
            console.log(res);
            localStorage.setItem('preciousToken', res.data.payload)
            dispatch({ type: SIGNIN_SUCCESS, payload: res.data.payload })
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: SIGNIN_FAILURE, payload: `${err.response.status}: ${err.response.statusText || "CRAZY UNKNOWN ERROR"}` })
        })
}