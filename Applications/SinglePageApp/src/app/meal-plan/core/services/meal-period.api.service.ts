import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MealPlanPeriod } from '../models/meal-plan-period.model';
import { MealPlanPeriodRequest } from '../models/meal-plan-period.request';

@Injectable({ providedIn: 'root' })
export class MealPlanPeriodService {
    constructor(
        private http: HttpClient
    ) { }

    create(mealPlanPeriodRequest: MealPlanPeriodRequest): Observable<any> {
        const params = mealPlanPeriodRequest.createParam();
        return this.http.post<any>(`${environment.apiUrl}/mealplan`, mealPlanPeriodRequest.body, { params });
    }
}
