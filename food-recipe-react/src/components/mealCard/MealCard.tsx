import React from "react";
import { MealCardProps } from "./MealCardProps.types";

const MealCard: React.FC<MealCardProps> = ({meal, selectedMeal}) => {
    return (
        <div className="meal-card">
            <div className="meal-card__image">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>

            <div className="meal-card__name">
                <h3>{meal.strMeal}</h3>
                <button className="meals-card__button" onClick={() => selectedMeal(meal.idMeal)}>Get recipe</button>
            </div>
        </div>
    )
};

export default MealCard;