
const initialState = {
    filmDataId: {},
    filmDataSearch: [{}],
    isLoadingFilmDataId: false,
    isLoadingFilmDataSearch: false,
    user: {
        token: "",
        lastName: "",
        firstName: "",
        email: "",
        isAuth: false,
        favoriteFilms: [],
        isLoadingLogin: false,
        isLoadingRegistration: false
    },
    errorAuth: "",
    errorRegistration:""
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case `GET_FILM_BY_ID_REQUEST`:
            return {
                ...state,
                isLoadingFilmDataId: true
            }

        case `GET_FILM_BY_ID_SUCCESS`:
            return {
                ...state,
                isLoadingFilmDataId: false,
                filmDataId: action.film.data
            }

        case `GET_FILM_BY_KEY_WORD_REQUEST`:
            return {
                ...state,
                isLoadingFilmDataSearch: true
            }

        case `GET_FILM_BY_KEY_WORD_SUCCESS`:
            return {
                ...state,
                isLoadingFilmDataSearch: false,
                filmDataSearch: action.films.films
            }

        case 'POST_LOGIN_REQUEST' :
            return {
                ...state,
                user: {
                    isLoadingLogin: true
                }
            }

        case 'POST_LOGIN_SUCCESS' :
            console.log(action)

            if (action.userInfo.token) {
                localStorage.setItem("token", action.userInfo.token)
            }
            return {
                ...state,
                user: {
                    token: action.userInfo.token,
                    lastName: action.userInfo.user.firstName,
                    firstName: action.userInfo.user.lastName,
                    email: action.userInfo.user.email,
                    isAuth: true,
                    isLoadingLogin: false
                }
            }

        case "POST_LOGIN_ERROR" :
            return {
                ...state,
                errorAuth: action.userInfo.message
            }

        case 'POST_REGISTRATION_REQUEST' :
            return {
                ...state,
                user: {
                    isLoadingRegistration: true
                }
            }

        case 'POST_REGISTRATION_SUCCESS' :
            if (action.userInfo.token) {
                localStorage.setItem("token", action.userInfo.token)
            }
            return {
                ...state,
                user: {
                    isLoadingRegistration: false,
                    isAuth: true
                }
            }

        case 'POST_REGISTRATION_ERROR':
            return {
                ...state,
                errorRegistration: action.userInfo.message
            }

        case "CHECK_AUTH_USER":
            if (localStorage.getItem("token")) {
                return {
                    ...state,
                    user: {
                        isAuth: true
                    },
                }
            } else {
                return {
                    ...state,
                    user: {
                        isAuth: false
                    }
                }
            }

        case "LOGOUT_USER":
            localStorage.removeItem("token")
            return {
                ...state,
                user:{
                    isAuth: false
                }
            }
        default:
            return state;
    }
}

export default reducer;
