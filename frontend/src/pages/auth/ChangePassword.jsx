import React, { useRef, useState } from 'react';
import { changePassword } from '../../services/authService';

const ChangePassword = () => {
  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const currentPassword = currentPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    try {
      setError(null);
      const response = await changePassword({
        currentPassword,
        newPassword,
        confirmPassword,
      });

      setSuccessMessage(response.message);
    } catch (error) {
      setSuccessMessage(null);
      setError(error?.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <>
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='currentPassword'>Current Password</label>
        <input
          type='password'
          id='currentPassword'
          ref={currentPasswordRef}
          placeholder='Enter current password'
          required
        />
        <label htmlFor='newPassword'>New Password</label>
        <input
          type='password'
          id='newPassword'
          ref={newPasswordRef}
          placeholder='Enter new password'
          required
        />
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          type='password'
          id='confirmPassword'
          ref={confirmPasswordRef}
          placeholder='Confirm new password'
          required
        />
        <button type='submit'>Change Password</button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default ChangePassword;
