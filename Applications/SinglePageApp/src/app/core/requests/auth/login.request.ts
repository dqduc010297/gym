import { HttpParams } from '@angular/common/http';
import { LoginModel } from '../../models/login.model';
import { IBodyRequest } from '../ibody.request';
import { IRequest } from '../irequest';
import { ILoadingRequest } from '../loading.request';

export class LoginRequest implements IRequest, ILoadingRequest, IBodyRequest {
    body: LoginModel;
  
    createParam(): HttpParams {
      return new HttpParams().set('loadingKey', this.getLoadingKey());
    }

    getLoadingKey(): string {
      return 'LoginRequest';
    }
  }
  