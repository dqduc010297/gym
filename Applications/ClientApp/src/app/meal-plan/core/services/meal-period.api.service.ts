import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MealPlanPeriod } from '../models/meal-plan-period.model';
import { MealPlanPeriodRequest } from '../models/meal-plan-period.request';

@Injectable({ providedIn: 'root' })
export class MealPlanPeriodAPIService {
    constructor(
        private http: HttpClient
    ) { }

    create(mealPlanPeriodRequest: MealPlanPeriodRequest): Observable<number> {
        const params = mealPlanPeriodRequest.createParam();
        return this.http.post<number>(`${environment.apiUrl}/mealplan`, mealPlanPeriodRequest.body, { params });
    }

    update(mealPlanPeriodRequest: MealPlanPeriodRequest): Observable<any> {
        const params = mealPlanPeriodRequest.createParam();
        return this.http.put<any>(`${environment.apiUrl}/mealplan`, mealPlanPeriodRequest.body, { params });
    }

    getList(userId: number): Observable<MealPlanPeriod[]> {
        return this.http.get<MealPlanPeriod[]>(`${environment.apiUrl}/mealplan?userId=${userId}`);
    }
}
