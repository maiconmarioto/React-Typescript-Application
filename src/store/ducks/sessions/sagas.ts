import { put, call } from 'redux-saga/effects';
import api from '../../../service/api';

import { loadFailure, loadSuccess } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'sessions');

    if (response.data.response !== 'success') {
      put(loadFailure());
    }

    yield put(loadSuccess(response.data.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
