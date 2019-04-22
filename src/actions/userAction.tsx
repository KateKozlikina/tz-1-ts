import { Dispatch } from 'redux';
import { navigate } from "@reach/router";
import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
} from '../constants/index';
import { IUserIdentify } from '../models/user';
import { loginAction } from '../models/actions';
import { authenticate } from '../api/Auth';


export const login: any = (user: IUserIdentify) => {
  return (dispatch: Dispatch<loginAction>): any => {
    authenticate(user)
    .then(() => {
      navigate('./profile');
      return dispatch ({
        type: LOGIN,
        payload: user.username,
      })
    })
    .catch(error =>{
      return dispatch ({
        type: LOGIN_FAIL,
        payload: {
          errorMsg: error.errorText,
        },
        error: true,
      })
    })


  }
};

export const logout = () => {
  return {
    type: LOGOUT,
  }
}
