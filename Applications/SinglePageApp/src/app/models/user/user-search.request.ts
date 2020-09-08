import { FilterRequest } from '../../requests/filter.request';
import { Role } from 'src/app/const/role';

export class UserSearchRequest implements FilterRequest {
  skip: number = 0;
  take: number = 10;
  roleName: string;
  phoneNumber: string;
  fullname: string;

  constructor() {
  }
}
