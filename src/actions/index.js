import { createAction, createAsyncAction } from "../tools/actions-creaters";

export const postLoginAction = createAsyncAction("POST_LOGIN");
export const postRegistrationAction = createAsyncAction("POST_REGISTRATION");
export const fetchFilmByIdAction = createAsyncAction("GET_FILM_BY_ID");
export const fetchFilmByKeyWordAction = createAsyncAction("GET_FILM_BY_KEY_WORD");
export const getPurchasedTicketsAction = createAsyncAction("GET_PURCHASED_TICKETS");
export const getBuyTicketsAction = createAsyncAction("GET_BUY_TICKETS");
export const checkAuthUser = createAction("CHECK_AUTH_USER");
export const logOutUser = createAction("LOGOUT_USER");
