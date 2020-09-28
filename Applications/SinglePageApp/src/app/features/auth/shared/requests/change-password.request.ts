import { ILoadingRequest } from 'src/app/requests/loading.request';

export class ChangePasswordRequest  implements ILoadingRequest{
  currentPassword: string;
  newPassword: string;

  getLoadingKey(): string {
    return 'ChangePasswordRequest';
  }
}
