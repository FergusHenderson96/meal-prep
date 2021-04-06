import React, {useState, useEffect} from 'react';

export default function Meal({meal}){
    const [foodData, setFoodData] = useState("");

useEffect(() => {
    fetch(
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=5071844b4f134084adbb3a8e606f24fe&includeNutrition=false`
    )
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        setFoodData(data)
      
})
.catch(() => {
    console.log("error");
  })
}, [meal.id])
//this allows the useEffect to call the api if the meal id changes

    return <article>
        <h1>{meal.title}</h1>
        <img src={foodData.image} alt="recipe"/>
        <ul className="instructions">
            <li>Prep time: {meal.readyInMinutes} mins</li>
            <li>Serves: {meal.servings}</li>
            <li>Weight Watchers Smart Points: {foodData.weightWatcherSmartPoints}</li>
        </ul>

        <a href={meal.sourceUrl}>Go to recipe</a>
        </article>;

}