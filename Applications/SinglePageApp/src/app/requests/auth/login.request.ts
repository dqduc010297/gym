import { ILoadingRequest } from '../loading.request';

export class LoginRequest implements ILoadingRequest {
  username: string;
  password: string;
  rememberMe: boolean;

  getLoadingKey(): string {
    return 'LoginRequest';
  }
}
