import React, { useState } from 'react';

const UrlPage = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the specified endpoint
      const response = await fetch('http://localhost:3001/url/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      // Handle the response as needed
      const data = await response.json();
      console.log('Shortened URL:', data.shortenedUrl);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='url'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type='submit'>Shorten URL</button>
      </form>
    </div>
  );
};

export default UrlPage;
