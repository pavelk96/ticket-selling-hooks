import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import KinopoiskService from "../services/kinopiosk-api";
import {
    getFilmByIdAsync,
    getFilmByIdRequest,
    getFilmByIdSuccess,
    getFilmByKeyWordAsync,
    getFilmByKeyWordRequest,
    getFilmByKeyWordSuccess,
    postLoginAsync, postLoginError,
    postLoginRequest,
    postLoginSuccess,
    postRegistrationAsync, postRegistrationError,
    postRegistrationRequest, postRegistrationSuccess
} from "../actions";
import { userLogin, userRegistration } from "../services/user-api";

const kinopoiskService = new KinopoiskService();

function* fetchFilmByIdWorker(id) {
    yield put({type: getFilmByIdRequest})
    const film = yield kinopoiskService.getFilmById(id.id);
    yield put({type: getFilmByIdSuccess, film})
}

function* fetchFilmByKeyWord(value) {
    yield put({type: getFilmByKeyWordRequest});
    const films = yield kinopoiskService.getFilmsByKeyWord(value.value);
    yield put({type: getFilmByKeyWordSuccess, films});
}

function* fetchLoginWorker (data) {
    yield put({type: postLoginRequest})
    const userInfo =  yield userLogin(data.user.email, data.user.password)
    if (userInfo.token) {
        yield put({type: postLoginSuccess, userInfo})
    } else {
        yield put({type:postLoginError, userInfo})
    }
}

function* fetchRegistrationWorker (data) {
    const {user} = data;
    const { firstName, lastName, email, password } = user;
    yield put({type: postRegistrationRequest})
    const userInfo = yield userRegistration(firstName, lastName, email, password)
    if (userInfo.token) {
        yield put({type: postRegistrationSuccess, userInfo})
    } else {
        yield put({type: postRegistrationError, userInfo})
    }
}


export default function* rootFilmsWatcher () {
    yield takeEvery(getFilmByIdAsync, fetchFilmByIdWorker)
    yield takeEvery(getFilmByKeyWordAsync, fetchFilmByKeyWord)
    yield takeEvery(postLoginAsync, fetchLoginWorker)
    yield takeEvery(postRegistrationAsync, fetchRegistrationWorker)
}

