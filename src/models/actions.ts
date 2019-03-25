import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
} from '../constants/index';

interface loginSuccessAction {
  type: typeof LOGIN,
  payload: string
}

interface loginFailAction {
  type: typeof LOGIN_FAIL,
  payload: {
    errorMsg: string,
  },
  error: boolean,
}

export interface logoutAction {
  type: typeof LOGOUT,
}

export interface sessionState {
  username: string | null,
  errorMsg: string,
}

export type loginAction = loginSuccessAction | loginFailAction;
