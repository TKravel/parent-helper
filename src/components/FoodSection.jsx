// TODO: Break data into breakfast, lunch, dinner, snacks.
import React, {useState} from "react";
import TextInput from "./TextInput";

function FoodInput(){
    const [foods, setFoods] = useState(["pancakes", "ice cream"]);
    const [foodInput, setFoodInput] = useState("");

    function handleChange(e){
        const inputData = e.target.value;
        setFoodInput(inputData);
    }

    function handleClick(e){
        setFoods(prevValue => {
        return [...prevValue, foodInput]
        })
        setFoodInput("");
        e.preventDefault();
    }

    return (
        <div>
          <TextInput 
            name="foodInput"
            placeholder="Enter food here..."
            updateChange={handleChange}
            updateState={handleClick}
            stateData={foodInput}
          />
          <ul>
            {foods.map((food, index) => {
              return (
                  <li key={index} index={index}>{food}</li>
              )
            })}
          </ul>
        </div>
    )
}

export default FoodInput;