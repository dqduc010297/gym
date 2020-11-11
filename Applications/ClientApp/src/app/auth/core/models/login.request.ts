import { HttpParams } from '@angular/common/http';
import { IBodyRequest } from 'src/app/core/requests/ibody.request';
import { IRequest } from 'src/app/core/requests/irequest';
import { ILoadingRequest } from 'src/app/core/requests/loading.request';

export class LoginRequest implements IRequest, ILoadingRequest, IBodyRequest {
  body: any;

  createParam(): HttpParams {
    return new HttpParams().set('loadingKey', this.getLoadingKey());
  }

  getLoadingKey(): string {
    return 'LoginRequest';
  }
}
