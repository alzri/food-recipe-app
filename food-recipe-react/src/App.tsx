import React, { useState } from "react";
import MealDetails from "./components/mealDetails/MealDetails";
import SearchBar from "./components/searchBar/SearchBar";
import MealList from "./components/mealList/MealList";
import { Meal } from "./components/mealDetails/MealDetailsProps.types";


const App: React.FC = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

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
  }

  const closeCard = () => {
    setSelectedMeal(null);
  }

  return (
    <div>
      <SearchBar onSearch={getMealList}/>
      <MealList meals={meals} resultMeals={getstrInstructions} />
      {selectedMeal && <MealDetails meal={selectedMeal} closeCard={closeCard} />}
    </div>
  )
};

export default App;