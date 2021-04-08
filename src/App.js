import React, {useState} from "react";
import MealList from "./MealList";
import './App.css';
// API Key 5071844b4f134084adbb3a8e606f24fe
//https://api.spoonacular.com/mealplanner/generate?apiKey=5071844b4f134084adbb3a8e606f24fe&timeFrame=day&targetCalories=${calories}

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

//sets calories to data from form. calories set at 2000 by default
  const handleChange= (e) => {
    setCalories(e.target.value);
  }
//function to request data for daily meal plan based on calorie amount input
  const getMealData = () => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=5071844b4f134084adbb3a8e606f24fe&timeFrame=day&targetCalories=${calories}`
    )
    .then((res) => res.json())
    .then((data) => {
      //sets meal data in state to fetched data
      setMealData(data);
  })
  .catch(() => {
    console.log("error");
  })

};


  return <div className="App">
    <h1>Daily Meal Plan Generator</h1>
    <section className="controls">
      <input
      type="number"
      placeholder="Daily calories (e.g. 2000)" 
      onChange={handleChange}/>
    </section>
    <button onClick={getMealData}>Get Daily Meal Plan</button>
    {mealData && <MealList mealData={mealData} />}
  </div>
}

export default App;
