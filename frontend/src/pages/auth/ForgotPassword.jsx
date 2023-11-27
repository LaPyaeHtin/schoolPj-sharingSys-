import React, { useRef, useState } from 'react';
import { forgotPassword } from '../../services/authService';

const ForgotPassword = () => {
  const emailRef = useRef();
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;

    try {
      // Assuming forgotPassword returns a success message on successful initiation
      const response = await forgotPassword(email);
      setError(null);
      setSuccessMessage(response.message);
      console.log(response);
    } catch (error) {
      setSuccessMessage(null);
      setError(
        error.response?.data?.message ||
          'An error occurred. Please check your email and try again.'
      );
    }
  };

  return (
    <>
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          ref={emailRef}
          placeholder='Enter your email'
          required
        />
        <button type='submit'>Submit</button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default ForgotPassword;
