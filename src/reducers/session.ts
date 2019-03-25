import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
} from '../constants/index';

import {
  sessionState,
  loginAction,
  logoutAction
} from '../models/actions';

export const initialState: sessionState = {
  username: null,
  errorMsg: '',
}

export const session = (
  state = initialState,
  action: loginAction | logoutAction
): sessionState => {
  switch(action.type){
    case LOGIN: 
      return { ...state, username: action.payload, errorMsg: '' }
    case LOGOUT:
      return { ...state, username: null, errorMsg: '' }
    case LOGIN_FAIL: {
      return { ...state, errorMsg: action.payload.errorMsg }
    }
    default:
      return state
  }
}