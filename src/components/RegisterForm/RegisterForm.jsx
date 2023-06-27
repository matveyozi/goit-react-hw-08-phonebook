import  { useState } from 'react'
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';


const RegisterForm = () => {


	const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeInput = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };


  return (
	<form  onSubmit={handleSubmit} autoComplete="off">
      <label >
        Username
        <input required onChange={handleChangeInput} type="text" name="name" />
      </label>
      <label >
        Email
        <input required onChange={handleChangeInput} type="email" name="email" />
      </label>
      <label >
        Password
        <input required onChange={handleChangeInput} type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterForm