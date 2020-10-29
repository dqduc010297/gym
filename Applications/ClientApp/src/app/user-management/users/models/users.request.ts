import { HttpParams } from '@angular/common/http';
import { IBodyRequest } from 'src/app/core/requests/ibody.request';
import { IPaginationRequest } from 'src/app/core/requests/ipagination.request';
import { IRequest } from 'src/app/core/requests/irequest';
import { ILoadingRequest } from 'src/app/core/requests/loading.request';

export class UsersRequest implements IRequest, IBodyRequest, ILoadingRequest, IPaginationRequest {
  pageNumber = 1;
  rowsPerPage = 10;
  body: any;

  createParam(): HttpParams {
    return new HttpParams().set('request', JSON.stringify(this)).set('loadingKey', this.getLoadingKey());
  }
  getLoadingKey(): string {
    return 'UsersRequest';
  }
}
