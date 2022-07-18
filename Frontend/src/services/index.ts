import { APIService } from './APIServices/APIService';
import { HttpService } from './HTTPService/HTTPService';
import { UserService } from './UserService/UserService';

const apiService = new APIService();
const httpService = new HttpService(apiService);
const userService = new UserService(httpService);

export { apiService, httpService, userService };
