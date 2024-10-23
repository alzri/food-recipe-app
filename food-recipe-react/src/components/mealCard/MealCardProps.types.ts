import { Meal } from "../mealDetails/MealDetailsProps.types";

export interface MealCardProps {
    meal: Meal;
    selectedMeal: (id: string ) => void;
}