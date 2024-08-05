import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);


// Adds new list
  function getNewRandomSpicyFood() {
    const randomIndex = Math.floor(Math.random() * spicyFoods.length);
    return spicyFoods[randomIndex];
  }
  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    //We make a copy of the foods array and add the getNewRandomSpicyFood().  ... renders a new array
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }
//Removes list
  function handleClick(id){
    console.log(id);
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
    // const newFoodArray = foods.filter((food) => food.id !== id);
    // setFoods(newFoodArray);
  }

  // updates heat level
  // function handleClick(id) {
  //   const newFoodArray = foods.map((food) => {
  //     if (food.id === id) {
  //       return {
  //         ...food,
  //         heatLevel: food.heatLevel + 1,
  //       };
  //     } else {
  //       return food;
  //     }
  //   });
  //   setFoods(newFoodArray);
  // }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
