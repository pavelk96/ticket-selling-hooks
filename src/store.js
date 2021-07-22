import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import rootFilmsWatcher from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: reducer,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootFilmsWatcher)
export default store;
