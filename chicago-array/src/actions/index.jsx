import axios from "axios";

import { axiosWithAuth } from '../components/authorization/axiosWithAuth';


// SignUP
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signUp = (creds) => dispatch => {
    console.log(creds)
    dispatch({ type: SIGNUP_START })
        axios.post('https://chicago-aot.herokuapp.com/api/auth/register', creds)
        .then(res => {
            console.log(res);
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: SIGNUP_FAILURE, payload: `${err.response.status}: ${err.response.statusText || "CRAZY UNKNOWN ERROR"}` })
        })
}

// SignIN
export const SIGNIN_START = 'SIGNIN_START';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const signIn = (creds) => dispatch => {
    dispatch({ type: SIGNIN_START })
    axiosWithAuth()
        .post('https://chicago-aot.herokuapp.com/api/auth/login', creds)
        .then(res => {
            console.log(res);
            localStorage.setItem('preciousToken', res.data.token)
            dispatch({ type: SIGNIN_SUCCESS, payload: res.data.token })
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: SIGNIN_FAILURE, payload: `${err.response.status}: ${err.response.statusText || "CRAZY UNKNOWN ERROR"}` })
        })
}

// Fetch
export const FETCH_START = 'FETCH_START';
// export const FETCH_SUCCESS = 'FETCH_SUCCESS';
// export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchData = (dataObj) => dispatch => {
    dispatch({ type: FETCH_START })
    axios
        .post('https://chicago-aot.herokuapp.com/api/nodes', JSON.stringify(dataObj))
        .then(res => {
            console.log(res);
        })
        .catch(err => {console.log(err.response)})
}
