import { FilterRequest } from '../../requests/filter.request';

export class UserOverviewRequest implements FilterRequest {
    skip: number = 0;
    take: number = 10;
}