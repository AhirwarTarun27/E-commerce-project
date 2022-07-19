import { RegistrationSchema } from '../../schemas/registration.schema';
import { LoginSchema } from '../../schemas/user.schema';
import { HttpService } from '../HTTPService/HTTPService';
export class UserService {
  // static register(data: REGISTER_FORM_DATA) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(private httpService: HttpService) {}

  async register(params: RegistrationSchema): Promise<any> {
    try {
      const response = await this.httpService.post('/registerUser', params);
      const { data } = response;
      if (data.sc == 1) {
        return data;
      }
    } catch (error) {
      throw error;
    }
  }

  async login(params: LoginSchema): Promise<any> {
    try {
      const response = await this.httpService.post('/loginUser', params);
      const { data } = response;
      if (data.sc == 1) {
        return data;
      }
    } catch (error) {
      throw error;
    }
  }
}
