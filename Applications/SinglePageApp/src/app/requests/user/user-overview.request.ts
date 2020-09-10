import { FilterRequest } from '../../requests/filter.request';
import { LoadingRequest } from '../loading.request';

export class UserOverviewRequest implements FilterRequest, LoadingRequest {
  loadingKey = 'UserOverviewRequest';
  skip = 0;
  take = 10;
}
