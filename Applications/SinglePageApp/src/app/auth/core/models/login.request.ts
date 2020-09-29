import { HttpParams } from '@angular/common/http';
import { LoginModel } from 'src/app/auth/core/models/login.model';
import { IBodyRequest } from 'src/app/core/requests/ibody.request';
import { IRequest } from 'src/app/core/requests/irequest';
import { ILoadingRequest } from 'src/app/core/requests/loading.request';

export class LoginRequest implements IRequest, ILoadingRequest, IBodyRequest {
  body: LoginModel;

  createParam(): HttpParams {
    return new HttpParams().set('loadingKey', this.getLoadingKey());
  }

  getLoadingKey(): string {
    return 'LoginRequest';
  }
}
