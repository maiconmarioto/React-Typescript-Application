import { all, takeLatest } from 'redux-saga/effects';

import { SessionsTypes } from './sessions/types';
import { load as loadSessions } from './sessions/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(SessionsTypes.LOAD_REQUEST, loadSessions)]);
}
