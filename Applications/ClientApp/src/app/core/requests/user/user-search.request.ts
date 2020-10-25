import { HttpParams } from '@angular/common/http';
import { IFilterRequest } from '../ifilter.request';
import { IRequest } from '../irequest';
import { ILoadingRequest } from '../loading.request';

export class UserSearchRequest implements IRequest, IFilterRequest, ILoadingRequest {
  skip = 0;
  take = 10;

  roleName: string;
  phoneNumber: string;
  fullname: string;

  constructor() {
  }

  getLoadingKey(): string {
    return 'UserSearchRequest';
  }

  public createParam(): HttpParams {
    return new HttpParams().set('request', JSON.stringify(this))
      .set('loadingKey', this.getLoadingKey());
  }
}
