import { action } from 'typesafe-actions';
import { Session, SessionsTypes } from './types';

export const loadRequest = () => action(SessionsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Session[]) => action(SessionsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(SessionsTypes.LOAD_FAILURE);
