import { HttpParams } from '@angular/common/http';
import { IRequest } from '../irequest';
import { ILoadingRequest } from '../loading.request';

export class UserMentionRequest implements IRequest, ILoadingRequest {
  fullname: string;

  constructor() {
  }

  createParam(): HttpParams {
    return new HttpParams().set('loadingKey', this.getLoadingKey());
  }

  getLoadingKey(): string {
    return 'UserMentionRequest';
  }
}
