import { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
import { login } from '../../services/authService';
import './css/login.css'
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  // const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await login({ email, password });
      console.log(response);
      if (response.accessToken) {
        setError(null);
        setSuccessMessage('Login successful! Redirecting to home page...');
        // setTimeout(() => {
        //   history.push('/');
        // }, 2000);
      } else {
        setError('Login failed. Please check your email and password.');
      }
    } catch (error) {
      // setError('An error occurred during login. Please try again.');
      setSuccessMessage(null);
      if (error.response) {
        setError(
          error.response.data.message ||
            'An error occurred during login. Please try again.'
        );
      } else if (error.request) {
        setError('No response received from the server.');
        console.error('No response received:', error.request);
      } else {
        setError('An error occurred during the request setup.');
        console.error('Request setup error:', error.message);
      }
    }
  };
  console.log('successMessage');

  return (
    <>
    <div className='l-form-box'>
      <form onSubmit={handleSubmit} className='l-form'>
        <fieldset><legend><h1>Login</h1></legend>
        <ul>
        <li><i className="bi bi-envelope"></i>
        <input
          type='text'
          id='email'
          ref={emailRef}
          placeholder='Enter email'
        /></li>
        <li><i className="bi bi-lock"></i>
        <input
          type='password'
          id='password'
          ref={passwordRef}
          placeholder='Enter password'
        /></li>
        <li><div><button type='submit' className='sub-btn'>Login</button></div></li>
        </ul>
        {/* <div className='sub-btn'><button type='submit'>Login</button></div> */}
        <p>Don't have an account?<Link to="/register" type='submit'>Register</Link></p>
        
        </fieldset>
      </form>
      </div>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default Login;
