import { useRef, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
import { login } from '../../services/authService';
import './css/login.css';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
=======
// import Nav from '../../components/Nav';
// import Nav from '../../components/nav'
// import { useHistory } from 'react-router-dom';
>>>>>>> 252d54ef396372efa7cb5dd5fbe941e917df5e5d

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await login({ email, password });
      toast.success(response.message);
      // Redirecting to another page after login
      // You can use react-router-dom's useHistory hook here
      // history.push('/');
    } catch (error) {
      setSuccessMessage(null);
      // Using toast to display error message
      toast.error(
        error.response.data.message ||
          'An error occurred during login. Please try again.',
      );
    }
  };

  return (
    <>
<<<<<<< HEAD
      <div className='l-form-box'>
        <form onSubmit={handleSubmit} className='l-form'>
          <fieldset>
            <legend>
              <h1>Login</h1>
            </legend>
            <ul>
              <li>
                <i className='bi bi-envelope'></i>
                <input
                  type='text'
                  id='email'
                  ref={emailRef}
                  placeholder='Enter email'
                />
              </li>
              <li>
                <i className='bi bi-lock'></i>
                <input
                  type='password'
                  id='password'
                  ref={passwordRef}
                  placeholder='Enter password'
                />
              </li>
              <li>
                <div>
                  <button type='submit' className='sub-btn'>
                    Login
                  </button>
                </div>
              </li>
            </ul>
            <p>
              Don't have an account?
              <Link to='/register' type='submit'>
                Register
              </Link>
            </p>
          </fieldset>
        </form>
=======
    <div className='l-form-box'>
     {/* <Nav/> */}
    
    
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
        <p>Do not have an account?<Link to="/register" type='submit'>Register</Link></p>
        
        </fieldset>
      </form>
    
>>>>>>> 252d54ef396372efa7cb5dd5fbe941e917df5e5d
      </div>

      {/* Display success or error messages */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Toast notification container */}
      <ToastContainer />
    </>
  );
};

export default Login;
