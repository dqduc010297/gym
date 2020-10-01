import { Meal } from './meal.model';

export class MealPeriod {
    isCurrent: boolean;
    title: string;
    target: string;
    meals: Meal[] = [];
    note: string;
}
