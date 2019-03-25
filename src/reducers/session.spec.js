import { session, initialState } from './session';
import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
} from '../constants/index';

describe('login reducer', () => {
  it('LOGIN', () => {
    const action = {
      type: LOGIN,
      payload: 'Admin',
    }
    expect(session(initialState, action)).toEqual({
      ...initialState,
      username: action.payload,
    })
  })
})