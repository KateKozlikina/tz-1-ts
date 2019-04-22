import { Reducer } from 'redux';
import { GET_NEWS_SUCCESS, GET_NEWS_FAIL } from '../constants/index';
import { newsState, getNewsAction } from '../models/actions';

const initialState: newsState = {
  data: null,
  errorMsg: '',
}

export const news: Reducer<newsState, getNewsAction> = (
  state = initialState,
  action
) => {
  switch(action.type){
    case GET_NEWS_SUCCESS: 
      return { ...state, data: action.payload.data, errorMsg: '' }
    case GET_NEWS_FAIL:
      return { ...state, errorMsg: action.payload.errorMsq}
    default:
      return state;
  }
}
