import React, { useState } from 'react';
import { IUserIdentify } from '../models/user';
import { loginProps } from '../containers/Login';


const Login: React.FC<loginProps> = (props) => {
  const initialUser: IUserIdentify = {
    username: '',
    password: '',
  }
  const [user, setUser] = useState<IUserIdentify>(initialUser);
  
  const onSubmit = (e: any): void => {
    e.preventDefault();
    props.login(user);
  }

  const handleChange = (e: any): void => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.dataset.fieldName;
      setUser({...user, [name]: value});
  }
  
  return (
    <>
      <h2>Login</h2>
      {props.errorMsg && <p color="red">{props.errorMsg}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          data-field-name={'username'}
          value={user.username}
          onChange={handleChange}
        />
        {' '}
        <input
          type="password"
          data-field-name={'password'}
          value={user.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </>
  )
}

export default Login;