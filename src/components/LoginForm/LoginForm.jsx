import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import authOperations from 'redux/auth/authOperations';



const LoginForm = () => {

	const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeInput = e => {
    switch (e.currentTarget.name) {
      case 'email':
        setEmail(e.currentTarget.value);
        break;
      case 'password':
        setPassword(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };



  return (
	 <form  onSubmit={handleSubmit} autoComplete="off">
      <label >
        Email
        <input required
            value={email}
            onChange={handleChangeInput} type="email" name="email" />
      </label>
      <label >
        Password
        <input required
            value={password}
            onChange={handleChangeInput} type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  )
}

export default LoginForm