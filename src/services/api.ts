import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.clarifai.com',
  headers:{
    "Authorization": "Key 418667bcda7f4994940f674f12b6c10d"
  }
})