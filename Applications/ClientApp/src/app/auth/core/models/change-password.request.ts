import { HttpParams } from '@angular/common/http';
import { ChangePasswordModel } from './change-password.model';
import { IBodyRequest } from '../../../core/requests/ibody.request';
import { IRequest } from '../../../core/requests/irequest';
import { ILoadingRequest } from '../../../core/requests/loading.request';

export class ChangePasswordRequest implements IRequest, IBodyRequest, ILoadingRequest {
  body: ChangePasswordModel;

  createParam(): HttpParams {
    return new HttpParams().set('loadingKey', this.getLoadingKey());
  }

  getLoadingKey(): string {
    return 'ChangePasswordRequest';
  }
}
