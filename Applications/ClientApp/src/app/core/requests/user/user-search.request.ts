import { HttpParams } from '@angular/common/http';
import { IFilterRequest } from '../ifilter.request';
import { IRequest } from '../irequest';
import { ILoadingRequest } from '../loading.request';

export class UserSearchRequest implements IRequest, ILoadingRequest {
  searchTerm: string;

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
