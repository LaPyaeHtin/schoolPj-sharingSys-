import React, { useRef, useState } from 'react';
import { register } from '../../services/authService';
import axios from 'axios';

const Register = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = passwordRef.current.value;

    try {
      const response = await register({
        username,
        email,
        password,
        confirmPassword,
      });
      //change json to string
      const data = JSON.stringify(response);
      console.log('hello');
      setSuccess(data);
      setError(null);
    } catch (error) {
      if (error.response) {
        setSuccess(null);
        console.log(success);
        setError(
          error.response.data.message ||
            'An error occurred during registration.'
        );
        console.error('Registration error:', error.response.data);
      } else if (error.request) {
        setError('No response received from the server.');
        console.error('No response received:', error.request);
      } else {
        setError('An error occurred during the request setup.');
        console.error('Request setup error:', error.message);
      }
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          ref={usernameRef}
          placeholder='Enter username'
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          ref={emailRef}
          placeholder='Enter email'
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          ref={passwordRef}
          placeholder='Enter password'
        />
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          type='password'
          id='confirmPassword'
          ref={confirmPasswordRef}
          placeholder='Confirm password'
        />
        <button type='submit'>Register</button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </>
  );
};

export default Register;
