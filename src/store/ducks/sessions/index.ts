import { Reducer } from 'redux';
import { SessionsState, SessionsTypes } from './types';

const INITIAL_STATE: SessionsState = {
  sessions: { content: [], total: 0 },
  error: false,
  loading: false,
};

const reducer: Reducer<SessionsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SessionsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case SessionsTypes.LOAD_SUCCESS:
      return { ...state, loading: false, sessions: action.payload.data };
    case SessionsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        sessions: [],
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
