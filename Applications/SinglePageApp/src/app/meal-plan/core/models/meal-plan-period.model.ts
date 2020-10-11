import { Meal, MealTitle } from './meal.model';

export class MealPlanPeriod {
    id: number;
    index: number;
    title: string;
    breakfast: Meal = new Meal();
    lunch: Meal = new Meal();
    beforeWorkout: Meal = new Meal();
    dinner: Meal = new Meal();
    extra: Meal = new Meal();
    isLock: boolean;
    isActivate: boolean;
    proteinPercent: number;
    fatPercent: number;
    carbPercent: number;
    note: string;
    calo: number;
    target: string;
    estimateTime: Date[] = [];
    isView: boolean;
    userId: number;

    constructor() {
        this.id = 0;
        this.breakfast.title = MealTitle.Breakfast;
        this.lunch.title = MealTitle.Lunch;
        this.beforeWorkout.title = MealTitle.BeforeWorkout;
        this.dinner.title = MealTitle.Dinner;
    }
}
