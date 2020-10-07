import { HttpParams } from '@angular/common/http';
import { IBodyRequest } from 'src/app/core/requests/ibody.request';
import { IRequest } from 'src/app/core/requests/irequest';
import { ILoadingRequest } from 'src/app/core/requests/loading.request';
import { MealPlanPeriod } from './meal-plan-period.model';

export class MealPlanPeriodRequest implements IRequest, ILoadingRequest, IBodyRequest {
  body: MealPlanPeriod = new MealPlanPeriod();

  createParam(): HttpParams {
    return new HttpParams().set('loadingKey', this.getLoadingKey());
  }

  getLoadingKey(): string {
    return 'MealPlanPeriodRequest';
  }
}
