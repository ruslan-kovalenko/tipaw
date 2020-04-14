import { put } from "redux-saga/effects";

import axios from "../../axios-instance";
import * as actions from "../actions";

import { toast } from 'react-toastify';

export function* sendMessageSaga(action) {
    yield put(actions.sendMessageStart());
    try {
      yield axios.post(
        '/contacts',
        action.messageData
      );
      yield put(
        actions.sendMessageSuccess()
      );
      toast('Success!', {hideProgressBar: true});
    } catch (error) {
      yield put(actions.sendMessageFail(error));
      toast.error(`Something wrong occured. Please recheck your data.`, {hideProgressBar: true});
    }
  }