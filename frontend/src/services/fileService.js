import axios from 'axios';

const fileBaseUrl = 'http://localhost:3000/file';

const uploadFile = async (formData) => {
  try {
    const response = await axios.post(`${fileBaseUrl}/upload`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getAllFiles = async () => {
  try {
    const response = await axios.get(`${fileBaseUrl}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateFile = async (shortId, data) => {
  try {
    const response = await axios.patch(`${fileBaseUrl}/${shortId}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteFile = async (shortId) => {
  try {
    const response = await axios.delete(`${fileBaseUrl}/${shortId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { uploadFile, getAllFiles, updateFile, deleteFile };
