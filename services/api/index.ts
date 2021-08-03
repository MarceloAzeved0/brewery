import axios from 'axios';


export const api = axios.create({
  baseURL: 'https://api.openbrewerydb.org'
});

export default api;