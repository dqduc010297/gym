export enum MealTitle {
    Breakfast = 'Breakfast - Bữa sáng',
    Lunch = 'Lunch - Bữa trưa',
    BeforeWorkout = 'BeforeWorkout - Bữa trước tập',
    Dinner = 'Dinner - Bữa tối',
    Extra = 'Extra - Bữa phụ',
}
export class Meal {
    title: string;
    menu: string[];
    notes: string[];
    calo: number;
    isActive: boolean;
}
