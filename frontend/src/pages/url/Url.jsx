import React, { useState, useEffect } from 'react';
import { createShortenUrl, getAllUrls } from '../../services/urlService'; // Import your apiService functions
import CopyButton from '../../components/CopyButton';
import './url.css'
import { Link } from 'react-router-dom';


const ShortenUrlApp = () => {
  const [url, setUrl] = useState('');
  const [customLink, setCustomLink] = useState('');
  const [password, setPassword] = useState('');
  const [limit, setLimit] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [urls, setUrls] = useState([]);
  const [isActive, setisActive] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPremium, setIsPremium] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        url,
        customLink: customLink || undefined,
        password: password || undefined,
        limit: limit || undefined,
      };
      const response = await createShortenUrl(data);
      console.log(response.data);
      setShortenedUrl(response.data.shortUrl);

      setSuccessMessage('URL successfully shortened!');
      setErrorMessage('');
    } catch (error) {
      console.error(
        'Error creating shortened URL:',
        error?.response?.data?.message
      );
      setErrorMessage(
        error?.response?.data?.message ||
          'Failed to shorten URL. Please try again.'
      );
      setSuccessMessage('');
    }
  };

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await getAllUrls();
        console.log(response.data);
        setUrls(response.data);
        setIsPremium(response.isPremium);
        console.log(response)
      } catch (error) {
        console.error('Error fetching shortened URLs:', error.message);
        setErrorMessage('Failed to fetch shortened URLs. Please try again.');
      }
    };

    fetchUrls();
  }, [shortenedUrl]);

  const handleIsActiveChange = () => {
    setisActive(!isActive);
  };

  return (
    <div>
      <div className='container'>
      <div className='nav'>
      <div className='nav-front'>
            <h2>Light<span>Code</span></h2>
        </div>
          <div className='nav-end'>
            <ul>
              <li><Link to='/home' className='LinkLine'>Home</Link></li>
              <li><Link to='/files' className='LinkLine'>File Upload</Link></li>
              <li><Link to='/url' className='LinkLine'>Url</Link></li>
              <li><Link to='/url/:shortUrl' className='LinkLine'>Url Short</Link></li>
              <li><Link to='/host' className='LinkLine'>Host</Link></li>
              <li><Link to='/register' className='LinkLine'>Register</Link></li>
            </ul>
          </div>
        </div>
        {/* <div className='main'> */}
        <div className='left'>
      
      <h1>Shorten URL App</h1>

      {/* Display success message */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      {/* Display error message */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <label>
          URL:
          <input
            type='text'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <br />
      {/* Form for creating shortened URLs */}
      <form onSubmit={handleSubmit}>
        <ul className={`${isPremium?'showbox':'donotshow'}`}>
        
        <li><label>
          Custom Link:
          <input
            type='text'
            value={customLink}
            onChange={(e) => setCustomLink(e.target.value)}
          />
        </label></li>
        <br />
        <li><label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label></li>
        <br />
        <li><label>
          Limit:
          <input
            type='number'
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </label></li>
        <br />
        <li><label>
          isActive:
          <input
            type='checkbox'
            checked={isActive}
            onChange={handleIsActiveChange}
          />
        </label></li>
       
        </ul>
        <button type='submit'>Shorten URL</button>
      </form>

      {/* Display shortened URL */}
      {shortenedUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortenedUrl} target='_blank' rel='noopener noreferrer'>
            {`${window.location.origin}/url/${shortenedUrl}`}
          </a>
        </div>
      )}
      </div>

      {/* Display list of shortened URLs */}
      <div className='right'>
        <h2>Your Shortened URLs</h2>
        <table>
          <thead>
            <tr>
              <th>url</th>
              <th>clickCount</th>
              <th>isActive</th>
              <th>limit</th>
              <th>url</th>
              <th>Copy</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url) => (
              <CopyButton key={url._id} {...url} />
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
    // </div>
  );
};

export default ShortenUrlApp;
