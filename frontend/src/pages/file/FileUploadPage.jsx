import { useState, useEffect } from 'react';
import { uploadFile, getAllFiles } from '../../services/fileService';
 import './fileUpload.css';

const FileUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [customLink, setCustomLink] = useState('');
  const [password, setPassword] = useState('');
  const [limit, setLimit] = useState('');
  const [customFileName, setCustomFileName] = useState('');
  const [uploadMessage, setUploadMessage] = useState('');
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleCustomLinkChange = (event) => {
    setCustomLink(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handleCustomFileNameChange = (event) => {
    setCustomFileName(event.target.value);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setUploadMessage('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('customLink', customLink);
    formData.append('password', password);
    formData.append('limit', limit);
    formData.append('customFileName', customFileName);

    try {
      await uploadFile(formData);
      setUploadMessage('File uploaded successfully.');
      const updatedFiles = await getAllFiles();
      setFiles(updatedFiles.data);
    } catch (error) {
      console.error('Error uploading file:', error?.response?.data?.message);
      setError(error?.response?.data?.message || 'Error uploading file.');
    }
  };

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await getAllFiles();
        setFiles(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching files:', error?.response?.data?.message);
        setError(error?.response?.data?.message || 'Error fetching files.');
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className='f-up-box'>
      
      <form onSubmit={handleUpload} encType='multipart/form-data' className='f-up'>
        <fieldset><legend><h1>File Upload</h1></legend>
        <ul>
        <li><input type='file' onChange={handleFileChange} /></li>
        <li><input
          type='text'
          placeholder='Custom Link'
          value={customLink}
          onChange={handleCustomLinkChange}
        /></li>
        <li><input
          type='text'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
        /></li>
        <li><input
          type='text'
          placeholder='Limit'
          value={limit}
          onChange={handleLimitChange}
        /></li>
        <li><input
          type='text'
          placeholder='Custom File Name'
          value={customFileName}
          onChange={handleCustomFileNameChange}
        /></li>
        <li><button type='submit'>Upload File</button></li>
        <li>{error && <p style={{ color: 'red' }}>{error}</p>}
        {uploadMessage && <p style={{ color: 'green' }}>{uploadMessage}</p>}</li>
        </ul> </fieldset>
      </form>
      <h2>Uploaded Files</h2>
      
        {files?.map((file) => (
          <li key={file._id}>{file.originalFilename}</li>
        ))}
    
    </div>
  );
};

export default FileUploadPage;
