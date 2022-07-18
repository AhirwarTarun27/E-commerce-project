import axios from 'axios';
import config from '../../config/GlobalConfig';

export class APIService {
  create() {
    const apiInstance = axios.create({
      baseURL: config.apiBaseUrl,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    apiInstance.interceptors.request.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    return apiInstance;
  }
}
