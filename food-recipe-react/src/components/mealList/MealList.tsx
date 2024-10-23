import React from "react";
import { MealListprops } from "./MealListProps.types";
import MealCard from "../mealCard/MealCard";
import styles from './MealList.module.scss';

const MealList: React.FC<MealListprops> = ({meals, resultMeals}) => {
    return (
        <div>
            {meals.length > 0 && <h2 className={styles.resaultsTitle}>Search results:</h2>}
            <div  className={styles.mealList}>
                {meals.length > 0 ? (
                    meals.map((meal) => (
                    <>
                        <MealCard key={meal.idMeal} meal={meal} selectedMeal={resultMeals} />
                        </>
                    ))
                ) : ('')}
            </div>
        </div>
    )
};

export default MealList;