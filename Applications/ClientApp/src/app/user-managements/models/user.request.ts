import { HttpParams } from '@angular/common/http';
import { IBodyRequest } from 'src/app/core/requests/ibody.request';
import { IRequest } from 'src/app/core/requests/irequest';
import { ILoadingRequest } from 'src/app/core/requests/loading.request';
import { User } from './user';

export class UserRequest implements IRequest, IBodyRequest, ILoadingRequest {
    body: User = new User();
    createParam(): HttpParams {
        return new HttpParams().set('loadingKey', this.getLoadingKey());
    }
    getLoadingKey(): string {
        return 'UserRequest';
    }
}
