import { Dispatch } from 'redux';
import { GET_NEWS_SUCCESS, GET_NEWS_FAIL } from '../constants/index';
import { getNewsPromise } from '../api/News';
import { getNewsAction } from '../models/actions';

export const getNews: any = () => {
  return (dispatch: Dispatch<getNewsAction>): any => {
    getNewsPromise()
    .then((res) => {
      return dispatch ({
        type: GET_NEWS_SUCCESS,
        payload: {
          data: res.data,
        }
      })
    })
    .catch(err => {
      return dispatch ({
        type: GET_NEWS_FAIL,
        payload: {
          errorMsq: err.errorText,
        },
        error: true,
      })
    })
  }
};