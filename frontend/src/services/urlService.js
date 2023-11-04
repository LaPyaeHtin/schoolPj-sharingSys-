import axios from 'axios';

const urlBaseUrl = 'http://localhost:3000/url';

const createShortenUrl = async (data) => {
  try {
    const response = await axios.post(`${urlBaseUrl}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getAllUrls = async () => {
  try {
    const response = await axios.get(`${urlBaseUrl}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getUrl = async (shortUrl) => {
  try {
    const response = await axios.post(`${urlBaseUrl}/${shortUrl}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteUrl = async (shortUrl) => {
  try {
    const response = await axios.delete(`${urlBaseUrl}/${shortUrl}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateUrl = async (shortUrl, data) => {
  try {
    const response = await axios.patch(`${urlBaseUrl}/${shortUrl}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { createShortenUrl, getAllUrls, getUrl, deleteUrl, updateUrl };
