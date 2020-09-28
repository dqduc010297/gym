import { FilterRequest } from '../filter.request';
import { ILoadingRequest } from '../loading.request';

export class UserMentionRequest implements ILoadingRequest {
  fullname: string;

  constructor() {
  }

  getLoadingKey(): string {
    return 'UserMentionRequest';
  }
}
