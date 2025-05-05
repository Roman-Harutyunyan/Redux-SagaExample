// takeEvery vercnume requesti infon, aysinqn api-y

import {takeEvery} from "redux-saga/effects"
import { GET_REQUEST } from "../actions/action"

export default function* watcher() {
    yield takeEvery(GET_REQUEST)
}