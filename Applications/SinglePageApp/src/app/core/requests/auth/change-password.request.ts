import { HttpParams } from '@angular/common/http';
import { ChangePasswordModel } from '../../models/change-password.model';
import { IBodyRequest } from '../ibody.request';
import { IRequest } from '../irequest';
import { ILoadingRequest } from '../loading.request';


export class ChangePasswordRequest  implements IRequest, IBodyRequest, ILoadingRequest{
  body: ChangePasswordModel;
  
  createParam(): HttpParams {
    return new HttpParams().set('loadingKey', this.getLoadingKey());
  }

  getLoadingKey(): string {
    return 'ChangePasswordRequest';
  }
}
