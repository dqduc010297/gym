import { HttpParams } from '@angular/common/http';
import { IFilterRequest } from '../ifilter.request';
import { IRequest } from '../irequest';

export class UserSearchRequest implements IRequest, IFilterRequest {
  skip = 0;
  take = 10;
  roleName: string;
  phoneNumber: string;
  fullname: string;

  constructor() {
  }

  public createParam(): HttpParams {
    return new HttpParams().set('request', JSON.stringify(this));
  }
}
