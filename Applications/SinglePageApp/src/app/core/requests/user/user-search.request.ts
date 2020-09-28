import { FilterRequest } from '../../requests/filter.request';

export class UserSearchRequest implements FilterRequest {
  skip = 0;
  take = 10;
  roleName: string;
  phoneNumber: string;
  fullname: string;

  constructor() {
  }
}
