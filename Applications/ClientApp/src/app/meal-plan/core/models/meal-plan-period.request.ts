import { HttpParams } from '@angular/common/http';
import { IBodyRequest } from 'src/app/core/requests/ibody.request';
import { IRequest } from 'src/app/core/requests/irequest';
import { MealPlanPeriod } from './meal-plan-period.model';

export class MealPlanPeriodRequest extends IRequest implements IBodyRequest {
  body: MealPlanPeriod = new MealPlanPeriod();
}
