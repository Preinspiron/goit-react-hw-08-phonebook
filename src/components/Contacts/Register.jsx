// import s from '../ContactForm/ContactForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth';
import * as React from 'react';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <form className="" action="" onSubmit={onFormSubmit}>
      <TextField
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name..."
        required
      />
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
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your pass..."
        required
      />
      <Button variant="outlined" type="submit">
        Register
      </Button>
    </form>
  );
}
