// takeEvery vercnume requesti infon, aysinqn api-y

import {takeEvery, put, call} from "redux-saga/effects";
import { GET_ERROR, GET_REQUEST, GET_SUCCESS } from "../actions/action";
import Api from "../../Api";

export default function* watcher() {
    yield takeEvery(GET_REQUEST, worker)
}

function* worker(action) {
    const {location} = action.payload;
    const {data} = yield call(Api.getData, search);
    try {
        yield put({
            type: GET_SUCCESS,
            payload: {data},
        })
    } catch(error) {
        yield put({
            type: GET_ERROR
        })
    }
}