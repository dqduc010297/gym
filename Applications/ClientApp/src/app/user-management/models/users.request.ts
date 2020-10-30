import { HttpParams } from '@angular/common/http';
import { IPaginationRequest } from 'src/app/core/requests/ipagination.request';
import { IRequest } from 'src/app/core/requests/irequest';
import { ILoadingRequest } from 'src/app/core/requests/loading.request';

export class UsersRequest implements IRequest, ILoadingRequest, IPaginationRequest {
  pageNumber = 1;
  rowsPerPage = 10;
  searchTerm = '';

  createParam(): HttpParams {
    return new HttpParams().set('request', JSON.stringify(this)).set('loadingKey', this.getLoadingKey());
  }

  getLoadingKey(): string {
    return 'UsersRequest';
  }
}
