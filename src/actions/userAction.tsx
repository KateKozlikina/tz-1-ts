import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
} from '../constants/index';
import { IUserIdentify } from '../models/user';
import { checkAuth } from '../utils/checkAuth';

export const login = (user: IUserIdentify) => {
  return (dispatch: any) => {
    if (checkAuth(user)) {
      dispatch ({
        type: LOGIN,
        payload: user.username,
      })
    } else {
      dispatch ({
        type: LOGIN_FAIL,
        payload: {
          errorMsg: 'Неверный логин и/или пароль',
        },
        error: true,
      })
    }
  }
};

export const logout = () => {
  return {
    type: LOGOUT,
  }
}
