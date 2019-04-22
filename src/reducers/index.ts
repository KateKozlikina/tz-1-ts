import { combineReducers } from 'redux';
import { session } from './session';
import { news } from './news';

export const rootReducer = combineReducers({
  session,
  news,
});

export type AppState = ReturnType<typeof rootReducer>;