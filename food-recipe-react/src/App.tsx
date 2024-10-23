import React, { useEffect, useState } from "react";
import MealDetails from "./components/mealDetails/MealDetails";
import SearchBar from "./components/searchBar/SearchBar";
import MealList from "./components/mealList/MealList";
import { Meal } from "./components/mealDetails/MealDetailsProps.types";
import MealCardWindow from "./components/mealCardPopup/MealCardWindow";
import styles from './index.module.scss';


const App: React.FC = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [isCardOpen, setIsCardopen] = useState(false);

  const getMealList = async (searchInput: string) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`);
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meal list:", error);
      setMeals([]);
    }
  };
  

  const getstrInstructions = async (id: string) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    setSelectedMeal(data.meals[0]);
    setIsCardopen(true);
  }

  const closeCard = () => {
    setIsCardopen(false);
    setSelectedMeal(null);
  }

  useEffect(() => {
    if (isCardOpen) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }

    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [isCardOpen]);

  return (
    <div className="container">
      <div className={styles.mealWrapper}>
        <h1>Find Meals For Your Ingredients</h1>
        <p>Real food doesn't have ingredients, real food is ingredients.</p>
      </div>
      <SearchBar onSearch={getMealList}/>
      <MealList meals={meals} resultMeals={getstrInstructions} />
      <MealCardWindow isOpen={isCardOpen} onClose={closeCard}>
        {selectedMeal && <MealDetails meal={selectedMeal} />}
      </MealCardWindow>
    </div>
  )
};

export default App;