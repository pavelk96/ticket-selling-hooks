import { call, put, takeEvery } from 'redux-saga/effects'
import KinopoiskService from "../services/kinopiosk-api";
import {
    fetchFilmByIdAction, fetchFilmByKeyWordAction, getPurchasedTicketsAction,
    postLoginAction, postRegistrationAction, getBuyTicketsAction
} from "../actions";
import { buyTicket, purchasedTickets, userLogin, userRegistration } from "../services/user-api";

const kinopoiskService = new KinopoiskService();

function* fetchFilmByIdWorker({payload}) {
    console.log(payload)
    const film = yield kinopoiskService.getFilmById(payload);
    yield put(fetchFilmByIdAction.success(film))
}

function* fetchFilmByKeyWord({ payload }) {
    try {
        const films = yield kinopoiskService.getFilmsByKeyWord(payload.value);
        yield put(fetchFilmByKeyWordAction.success(films));
    } catch (e) {
        console.log(e)
    }
}

function* fetchLoginWorker ({ payload }) {
    const {email, password} = payload;
    try {
        const userInfo =  yield call(userLogin, email, password)
        yield put(postLoginAction.success(userInfo))
    } catch (e) {
        yield put(postLoginAction.error(e));
    }
}

function* fetchRegistrationWorker ({ payload }) {
    const { firstName, lastName, email, password } = payload;
    const userInfo = yield userRegistration(firstName, lastName, email, password)
    if (userInfo.token) {
        yield put(postRegistrationAction.success(userInfo))
        yield put(postLoginAction.success(userInfo))
    } else {
        yield put(postRegistrationAction.error(userInfo))
    }
}

function* postPurchasedTicketsAction ({payload}) {
    try {
        const ticket =  yield call(purchasedTickets, payload.filmId, payload.token);
        yield put(getPurchasedTicketsAction.success(ticket));
    } catch (e) {
        yield put(getPurchasedTicketsAction.error())
    }
}

function* getBuyTickets({payload}) {
    console.log("payload12", payload)
    try {
        const response = yield call(buyTicket, payload.filmId ,payload.selectedPlaceNumber, payload.token)
        yield put(getBuyTicketsAction.success())
        console.log(response)
    } catch (e) {

    }
}

export default function* rootFilmsWatcher () {
    yield takeEvery(fetchFilmByIdAction.request, fetchFilmByIdWorker)
    yield takeEvery(fetchFilmByKeyWordAction.request, fetchFilmByKeyWord)
    yield takeEvery(postLoginAction.request, fetchLoginWorker)
    yield takeEvery(postRegistrationAction.request, fetchRegistrationWorker)
    yield takeEvery(getPurchasedTicketsAction.request, postPurchasedTicketsAction)
    yield takeEvery(getBuyTicketsAction.request, getBuyTickets)
}

