import React from "react";
import { MealDetailsProps } from "./MealDetailsProps.types";

const MealDetails: React.FC<MealDetailsProps> = ({meal, closeCard}) => {

    return (
        <div className="meal-deetails-card">
            <h2 className="meal-name">{meal?.strMeal}</h2>
            <p className="meal-category">{meal?.strCategory}</p>

            <div className="recipe-instruction">
                <h3>Instruction:</h3>
                <p>{meal?.strInstructions}</p>
            </div>

            <div className="recipe-image">
                <img src={meal?.strMealThumb} alt={meal?.strMeal} />
            </div>

            <div className="recipe-link">
                <a href={meal?.strYoutube} target="_blank" rel="noopener noreferrer">Watch recipe video</a>
            </div>
            <button className="closeButton" onClick={closeCard}>Close card</button>
        </div>
    )
};

export default MealDetails;