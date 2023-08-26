// lib/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:1337/api'; // Ganti dengan URL Strapi Anda

const fetchAPI = async (posts: string) => {
  const url = `${API_BASE_URL}${posts}`;
  const response = await axios.get(url);
  console.log(response);
  return response.data;
};

export const getHero = async () => {
  return fetchAPI('/hero'); // Ubah sesuai dengan endpoint Hero di Strapi
};

export const getServices = async () => {
  return fetchAPI('/services'); // Ubah sesuai dengan endpoint Service di Strapi
};

export const getProjects = async () => {
  return fetchAPI('/projects'); // Ubah sesuai dengan endpoint Project di Strapi
};
