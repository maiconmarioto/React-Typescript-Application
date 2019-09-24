export enum SessionsTypes {
  LOAD_REQUEST = '@sessions/LOAD_REQUEST',
  LOAD_SUCCESS = '@sessions/LOAD_SUCCESS',
  LOAD_FAILURE = '@sessions/LOAD_FAILURE'
}

export interface Session {
  userName: string;
  sessionId: number;
  startDateTime: Date;
  endDateTime: Date;
  userId: number;
  establishmentId: number;
  created_at: Date;
  updated_at: Date;
}

export interface Sessions {
  content: Session[];
  total: number;
}

export interface SessionsState {
  readonly sessions: Sessions;
  readonly loading: boolean;
  readonly error: boolean;
}
