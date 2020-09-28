import { ILoadingRequest } from '../loading.request';

export class UserInfoRequest implements ILoadingRequest {
  userId: number;
  getLoadingKey(): string {
    return 'UserInfoRequest';
  }
}
