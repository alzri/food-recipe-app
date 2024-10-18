export interface Meal {
    idMeal: string;
    strCategory: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    strYoutube: string;
}

export interface MealDetailsProps {
    meal: Meal | null;
    closeCard: () => void;
}