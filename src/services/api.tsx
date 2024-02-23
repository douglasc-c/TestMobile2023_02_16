import axios from 'axios';
import { Platform } from 'react-native';

const api = axios.create({

  baseURL:
    Platform.OS === 'ios'
      ? 'https://swapi.dev/api'
      : 'https://swapi.dev/api', // prod
});

export default api;
