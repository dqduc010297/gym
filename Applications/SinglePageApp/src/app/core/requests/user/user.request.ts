import { UserInfo } from 'src/app/models/user/user-info';
import { ILoadingRequest } from '../loading.request';

export class UserRequest implements ILoadingRequest {
  userInfo: UserInfo = new UserInfo();
  getLoadingKey(): string {
    return 'UserRequest';
  }
}
