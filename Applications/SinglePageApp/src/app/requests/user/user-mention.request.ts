import { FilterRequest } from '../filter.request';

export class UserMentionRequest implements FilterRequest {
  skip = 0;
  take = 10;
  fullname: string;

  constructor() {
  }
}
