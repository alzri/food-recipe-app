import React from "react";
import { MealDetailsProps } from "./MealDetailsProps.types";
import styles from './MealDetails.module.scss';

const MealDetails: React.FC<MealDetailsProps> = ({meal}) => {

    return (
        <div className={styles.mealDetailsCard}>
            <h2 className={styles.mealName}>{meal?.strMeal}</h2>

            <div className={styles.mealDetailsCardTop}>
                <a className={styles.mealRecipeLink} href={meal?.strYoutube} target="_blank" rel="noopener noreferrer">Watch recipe video</a>
                <p className={styles.mealCategory}>{meal?.strCategory}</p>
            </div>

            <div className={styles.mealDetailsCardBottom}>
                <h3>Instruction:</h3>
                <p>{meal?.strInstructions}</p>
            </div>
        </div>
    )
};

export default MealDetails;