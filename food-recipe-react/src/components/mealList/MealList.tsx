import React from "react";
import { MealListprops } from "./MealListProps.types";
import MealCard from "../mealCard/MealCard";

const MealList: React.FC<MealListprops> = ({meals, resultMeals}) => {
    return (
        <div className="meal-list">
            {meals.length > 0 ? (
                meals.map((meal) => (
                    <MealCard key={meal.idMeal} meal={meal} selectedMeal={resultMeals} />
                ))
            ) : (
            <div>Sorry, we didn't find any meal!</div>
            )}
        </div>
    )
};

export default MealList;