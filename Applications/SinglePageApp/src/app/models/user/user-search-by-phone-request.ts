import { FilterRequest } from '../core/filter.request';
import { Role } from 'src/app/const/role';

export class UserSearchByPhoneRequest extends FilterRequest {
  roleName: string;
  phoneNumber: string;

  constructor() {
    super();
    this.take = 10;
  }
}
