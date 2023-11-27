import React, { useEffect, useState } from 'react';
import { logout } from '../../services/authService';

const Logout = () => {
  const [message, setMessage] = useState(null);

  const handleLogout = async () => {
    try {
      await logout();
      setMessage('Logout successful');
    } catch (error) {
      setMessage('Logout unsuccessful');
      console.error('Logout error:', error);
    }
  };
  useEffect(() => {
    // Call the logout function when the component mounts
    handleLogout();
  }, [history]);

  return (
    <div>
      <h1>Logging out...</h1>
      <h2>{message}</h2>
    </div>
  );
};

export default Logout;
