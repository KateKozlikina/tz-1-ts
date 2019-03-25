import { IUserIdentify } from '../models/user';

export const checkAuth = (user: IUserIdentify) : boolean => {
  if (user.username === 'Admin' && user.password === '12345') {
    return true;
  }
  return false;
};
