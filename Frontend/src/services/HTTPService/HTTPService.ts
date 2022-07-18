import { apiService } from '..';
import { APIService } from '../APIServices/APIService';

export class HttpService {
  private apiInstance: any = '';

  constructor(private apiService: APIService) {}

  get(url: string, params?: any) {
    this.apiInstance = apiService.create();
    return this.apiInstance.get(url, params);
  }

  post(url: string, body: any) {
    this.apiInstance = apiService.create();
    return this.apiInstance.post(url, body);
  }

  patch(url: string, body: any) {
    this.apiInstance = apiService.create();
    return this.apiInstance.patch(url, body);
  }

  delete(url: string, body: any) {
    this.apiInstance = apiService.create();
    return this.apiInstance.delete(url, { data: body });
  }
}
