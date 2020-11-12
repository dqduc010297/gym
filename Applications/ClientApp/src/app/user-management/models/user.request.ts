import { IBodyRequest } from 'src/app/core/requests/ibody.request';
import { IRequest } from 'src/app/core/requests/irequest';
import { User } from './user';

export class UserRequest extends IRequest implements  IBodyRequest {
    body: User = new User();
}
