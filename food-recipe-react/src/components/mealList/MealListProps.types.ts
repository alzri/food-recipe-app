import { Meal } from "../mealDetails/MealDetailsProps.types";

export interface MealListprops {
    meals: Meal[];
    resultMeals: (id: string ) => void;
}