import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { SessionsState } from './ducks/sessions/types';

export interface ApplicationState {
  sessions: SessionsState;
}

const logger = createLogger({
  duration: true,
});

const isProd = process.env.NODE_ENV === 'production';

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  isProd ? applyMiddleware(sagaMiddleware) : applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

export default store;
