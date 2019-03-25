  
import React, { useState } from 'react';
import { IUserIdentify } from '../models/user';
import { authenticate } from '../api/Auth';
import { navigate, RouteComponentProps } from '@reach/router';

const Login: React.FC<RouteComponentProps> = () => {
  const initialUser: IUserIdentify = {
    username: '',
    password: '',
  }
  const [user, setUser] = useState<IUserIdentify>(initialUser);
  const [notification, setNotification] = useState<string>('');
  const onSubmit = (e: any): void => {
    e.preventDefault();
    authenticate(user)
      .then(() => {
        navigate('./profile');
      })
      .catch(error =>{
        if(error.errorText) {
          setNotification(error.errorText);
        } else {
          console.log(error);
        }
      })
    
  }

  const handleChange = (e: any): void => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.dataset.fieldName;
      
      setUser({...user, [name]: value});
      setNotification('');
  }
  return (
    <>
      <h2>Login</h2>
      {notification && <p color="red">{notification}</p>}
      <form onSubmit={onSubmit}>
        <input type="text"   data-field-name={'username'} value={user.username} onChange={handleChange}/>{' '}
        <input type="password" data-field-name={'password'} value={user.password} onChange={handleChange}/>
        <button>Login</button>
      </form>
    </>
  )
}

export { Login }