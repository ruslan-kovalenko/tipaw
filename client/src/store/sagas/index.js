import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/types";

import {
  sendMessageSaga
} from "./contacts";

export function* watchContacts() {
  yield takeEvery(actionTypes.SEND_MESSAGE, sendMessageSaga);
}
