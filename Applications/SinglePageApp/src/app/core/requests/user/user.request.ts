import { HttpParams } from '@angular/common/http';
import { User } from '../../models/user';
import { IBodyRequest } from '../ibody.request';
import { IRequest } from '../irequest';
import { ILoadingRequest } from '../loading.request';

export class UserRequest implements IRequest, IBodyRequest, ILoadingRequest {
    body: User;
    createParam(): HttpParams {
        return new HttpParams().set('loadingKey', this.getLoadingKey()); 
    }
    getLoadingKey(): string {
        return 'UserRequest';
    }
}