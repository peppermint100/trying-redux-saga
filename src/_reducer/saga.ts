import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCatImage } from "./../api/cat";
import { REQUEST_DATA, receiveData } from "./../_action/cat/catAction";

function* getCatData() {
    const data = yield call(fetchCatImage);
    console.log("from saga : ", data);
    yield put(receiveData(data))
}

export default function* mySaga() {
    yield takeLatest(REQUEST_DATA, getCatData);
}