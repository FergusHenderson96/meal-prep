import React from 'react';
import Meal from "./Meal"

//takes meal data from app and passes through as props
function MealList({mealData}){
const nutrients = mealData.nutrients;
//takes nutrients section of the meal data and adds to nutrients variable

    return (
        <main>
            <section className="nutrients">
                <h1> 
                    Macros
                </h1>
                <ul>
                    <li>Calories: {nutrients.calories.toFixed(0)}</li>
                    <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li>Fats: {nutrients.fat.toFixed(0)}</li>
                    <li>Proteins: {nutrients.protein.toFixed(0)}</li>
                </ul>
            </section>

            <section className="meals">
                {/* maps into mealdata as meal and sends id to Meal file */}
{mealData.meals.map((meal) => {
    return <Meal key={meal.id} meal={meal} />;
})}
            </section>
        </main>
    )
}
export default MealList;