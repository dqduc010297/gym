import { HttpParams } from '@angular/common/http';
import { User } from './user';
import { IBodyRequest } from '../../../core/requests/ibody.request';
import { IRequest } from '../../../core/requests/irequest';
import { ILoadingRequest } from '../../../core/requests/loading.request';

export class UserRequest implements IRequest, IBodyRequest, ILoadingRequest {
    body: User;
    createParam(): HttpParams {
        return new HttpParams().set('loadingKey', this.getLoadingKey()); 
    }
    getLoadingKey(): string {
        return 'UserRequest';
    }
}
