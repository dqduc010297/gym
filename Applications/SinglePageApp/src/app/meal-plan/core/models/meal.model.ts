export enum MealType {
    Breakfast,
    Lunch,
    PreWorkout,
    Dinner,
    Extra,
}

export class Meal {
    mealType: MealType;
    menu: string;
    note: string;
    calo: number;
}
