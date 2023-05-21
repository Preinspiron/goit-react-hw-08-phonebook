// import s from '../ContactForm/ContactForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth';
import * as React from 'react';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form className="" action="" onSubmit={onFormSubmit}>
      <TextField
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email..."
        required
      />
      <TextField
        id="email"
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your pass..."
        required
      />
      <Button variant="outlined" type="submit">
        Login
      </Button>
    </form>
  );
}
