import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
  GET_NEWS_FAIL,
  GET_NEWS_SUCCESS,
} from '../constants/index';
import { INewsItem } from './news';

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

//newsAction
interface getNewsSuccessAction {
  type: typeof GET_NEWS_SUCCESS,
  payload: {
    data: INewsItem[],
  }
}

interface getNewsFailAction {
  type: typeof GET_NEWS_FAIL,
  payload: {
    errorMsq: string,
  },
  error: boolean,
}

export interface newsState {
  data: INewsItem[] | null,
  errorMsg: string
}

export type getNewsAction = getNewsFailAction | getNewsSuccessAction;