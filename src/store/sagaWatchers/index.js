// all-ov kanchum enq sagaWatc

import {all, fork} from "redux-saga/effects";
import sagaWatchers from "./sagaWatchers";

export default function* watchers() {
    yield all([
        sagaWatchers
    ].map(fork))
}