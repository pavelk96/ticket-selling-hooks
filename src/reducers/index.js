

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
    purchasedTickets: [
        {
            filmId: "",
            ticket: []
        }
    ],
    errorAuth: "",
    errorRegistration:""
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case `GET_FILM_BY_ID.REQUEST`:
            return {
                ...state,
                isLoadingFilmDataId: true
            }

        case `GET_FILM_BY_ID.SUCCESS`:
            return {
                ...state,
                isLoadingFilmDataId: false,
                filmDataId: action.payload.data
            }

        case `GET_FILM_BY_KEY_WORD.REQUEST`:
            return {
                ...state,
                isLoadingFilmDataSearch: true
            }

        case `GET_FILM_BY_KEY_WORD.SUCCESS`:
            return {
                ...state,
                isLoadingFilmDataSearch: false,
                filmDataSearch: action.payload.films
            }

        case 'POST_LOGIN.REQUEST' :
            return {
                ...state,
                user: {
                    isLoadingLogin: true
                }
            }

        case 'POST_LOGIN.SUCCESS' :
            if (action.payload.token) {
                localStorage.setItem("token", action.payload.token)
            }
            return {
                ...state,
                user: {
                    ...state.user,
                    token: action.payload.token,
                    lastName: action.payload.user?.lastName,
                    firstName: action.payload.user?.firstName,
                    email: action.payload.user?.email,
                    isAuth: true,
                    isLoadingLogin: false
                }
            }

        case "POST_LOGIN.ERROR" :
            console.log("action", action)
            return {
                ...state,
                errorAuth: action.payload.message,
                user: {
                    ...state.user,
                    isLoadingLogin: false
                }
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

        case "GET_PURCHASED_TICKETS.REQUEST":
            console.log(action)
            return state

        case "GET_PURCHASED_TICKETS.SUCCESS":
            console.log("action3", action)
            const newFilm = {
                filmId: action.payload.filmId,
                ticket: action.payload.placesTaken
            }
            return {
                ...state,
                purchasedTickets: [...state.purchasedTickets, newFilm]

            }

        case "GET_PURCHASED_TICKETS.ERROR":
            return state

        case "GET_BUY_TICKETS.REQUEST":
            console.log(action)
            return state
        case "GET_BUY_TICKETS.SUCCESS":
            console.log(action)
            return state
        case "GET_BUY_TICKETS.ERROR":
            console.log(action)
            return state
        default:
            return state;
    }
}

export default reducer;
