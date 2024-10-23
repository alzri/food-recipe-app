import React from "react";
import { MealCardProps } from "./MealCardProps.types";
import styles from './MealCard.module.scss';

const MealCard: React.FC<MealCardProps> = ({meal, selectedMeal}) => {
    return (
        <div className={styles.mealCard}>
            <div className={styles.mealCardImage}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>

            <div className={styles.mealCardInfo}>
                <h3 className={styles.mealCardName}>{meal.strMeal}</h3>
                <button className={styles.mealCardButton} onClick={() => selectedMeal(meal.idMeal)}>Get recipe</button>
            </div>
        </div>
    )
};

export default MealCard;