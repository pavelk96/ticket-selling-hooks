import { createAction } from '@reduxjs/toolkit'

export const getFilmByIdAsync = "GET_FILM_BY_ID_ASYNC";
export const getFilmByIdRequest = "GET_FILM_BY_ID_REQUEST";
export const getFilmByIdSuccess = "GET_FILM_BY_ID_SUCCESS";
export const getFilmByKeyWordAsync = "GET_FILM_BY_KEY_WORD_ASYNC";
export const getFilmByKeyWordRequest = "GET_FILM_BY_KEY_WORD_REQUEST";
export const getFilmByKeyWordSuccess = "GET_FILM_BY_KEY_WORD_SUCCESS";
export const postLoginAsync = "POST_LOGIN_ASYNC";
export const postLoginRequest = "POST_LOGIN_REQUEST";
export const postLoginSuccess = "POST_LOGIN_SUCCESS";
export const postLoginError = "POST_LOGIN_ERROR";
export const postRegistrationAsync = "POST_REGISTRATION_ASYNC";
export const postRegistrationRequest = "POST_REGISTRATION_REQUEST";
export const postRegistrationSuccess = "POST_REGISTRATION_SUCCESS";
export const postRegistrationError = "POST_REGISTRATION_ERROR";
export const authUser = "CHECK_AUTH_USER";
export const logOutUser = "LOGOUT_USER";

export const fetchLoginRequest = createAction("POST_LOGIN_REQUEST")
export const fetchLoginSuccess = (userInfo) => {
    return {
        type: postLoginSuccess,
        userInfo
    }
};
export const fetchLoginError = (error) => {
    return {
        type: postLoginError,
        error
    }
};

export const fetchRegistrationRequest = createAction("POST_REGISTRATION_REQUEST");
export const fetchRegistrationSuccess = (userInfo) => {
    return {
        type: postRegistrationSuccess,
        userInfo
    }
}
export const fetchRegistrationError = (error) => {
    return {
        type: postRegistrationError,
        error
    }
}


export const fetchFilmByIdRequest = createAction("GET_FILM_BY_ID_REQUEST");
export const fetchFilmByIdSuccess = (film) => {
    return {
        type: getFilmByIdSuccess,
        film
    }
};

export const fetchFilmByKeyWordRequest = createAction("GET_FILM_BY_KEY_WORD_REQUEST");
export const fetchFilmByKeyWordSuccess = (films) => {
    return {
        type: getFilmByKeyWordSuccess,
        films
    }
};

export const checkAuthUser = createAction("CHECK_AUTH_USER")
export const handleLogOutUser = createAction("LOGOUT_USER")

