import { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
import { register } from '../../services/authService';
import './css/register.css'
import { Link } from 'react-router-dom';

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
      console.log(response.link)
      const data = JSON.stringify(response);
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
   <div className='containerReg'> 
    <nav className='navReg'>
      <div className='nav-frontReg'>
            <h2>Light<span>Code</span></h2>
        </div>
          <div className='nav-endReg'>
            <ul>
              <li><Link to='/home' className='LinkLine'>Home</Link></li>
              <li><Link to='/files' className='LinkLine'>File Upload</Link></li>
              <li><Link to='/url' className='LinkLine'>Url</Link></li>
              <li><Link to='/url/:shortUrl' className='LinkLine'>Url Short</Link></li>
              <li><Link to='/host' className='LinkLine'>Host</Link></li>
              <li><Link to='/register' className='LinkLine'>Register</Link></li>
            </ul>
          </div></nav> 
       
       <div className='blur-box'> 
      <form onSubmit={handleSubmit} className='blur'>
        <fieldset>
        <legend><h2>Sign in</h2><p className='underline'></p></legend>
       
        <ul>
        <li><i className="bi bi-person"></i>
          {/* <label htmlFor='username'>Username</label> */}
        <input
          type='text'
          id='username'
          ref={usernameRef}
          placeholder='Enter username'
        />
        </li>
        <li><i className="bi bi-envelope"></i>
          {/* <label htmlFor='email'>Email</label> */}
        <input
          type='email'
          id='email'
          ref={emailRef}
          placeholder='Enter email'
        /></li>
        <li><i className="bi bi-lock"></i>
          {/* <label htmlFor='password'>Password</label> */}
        <input
          type='password'
          id='password'
          ref={passwordRef}
          placeholder='Enter password'
        /></li>
        <li><i className="bi bi-check"></i>
         
        <input
          type='password'
          id='confirmPassword'
          ref={confirmPasswordRef}
          placeholder='Confirm password'
        /></li>
      
        </ul>
        <div className='blur-btn'><button type='submit' className='btn'>Register</button></div>
        <p>Already have an account?<Link to="/login" type='submit'>Click here Login</Link></p>
        
        
        </fieldset>
      </form>
     </div>
      </div>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
 
      {/* </div> */}
    </>
  );
};

export default Register;
