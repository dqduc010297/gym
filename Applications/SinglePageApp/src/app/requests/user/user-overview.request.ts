import { FilterRequest } from '../../requests/filter.request';
import { ILoadingRequest } from '../loading.request';

export class UserOverviewRequest implements FilterRequest, ILoadingRequest {
  skip = 0;
  take = 10;
  getLoadingKey(): string {
    return 'UserOverviewRequest';
  }
}
