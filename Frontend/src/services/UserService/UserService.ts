import { RegistrationSchema } from '../../schemas/registrationSchema';
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
      if ((data.sc = 1)) {
        return data;
      }
    } catch (error) {
      throw error;
    }
  }
}
