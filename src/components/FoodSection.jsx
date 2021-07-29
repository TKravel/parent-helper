// TODO: Break data into breakfast, lunch, dinner, snacks.
import React, {useState} from "react";
import TextInput from "./TextInput";
import { globalData } from "../App";

function FoodInput(props){
    const [food, setFood] = useState([]);
    const [foodInput, setFoodInput] = useState("");

    if(food.length === 0 && globalData.food.length > 0){
      setFood(globalData.food);
  }

    function handleChange(e){
        const inputData = e.target.value;
        setFoodInput(inputData);
    }

    function handleClick(e){
        setFood(prevValue => {
          return [...prevValue, foodInput];
        })
        globalData.food.push(foodInput);
        setFoodInput("");
        e.preventDefault();
    }

    return (
        <div id="foodSection" className={props.currentDisplay}>
          <header>
            <h1>Food tracker</h1>
          </header>
          <TextInput 
            label="Enter food"
            name="foodInput"
            buttonID="addFoodItem"
            placeholder="Enter food here..."
            updateChange={handleChange}
            updateState={handleClick}
            stateData={foodInput}
          />
          <ul>
            {food.map((food, index) => {
              return (
                  <li key={index} index={index}>{food}</li>
              )
            })}
          </ul>
          <button>Save</button>
        </div>
    )
}

export default FoodInput;