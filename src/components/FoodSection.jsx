// TODO: Break data into breakfast, lunch, dinner, snacks.
import React, {useState} from "react";
import TextInput from "./TextInput";
import Header from "./Header";
import SaveButton from "./SaveButton";

function FoodInput({ foodData, setFoodData }){ 
    
    const [foodInput, setFoodInput] = useState("");

    function handleChange(e){
        const inputData = e.target.value;
        setFoodInput(inputData);
    }

    function handleClick(e){
      setFoodData(prevValue => {
        return [...prevValue, foodInput];
      })
      setFoodInput("");
      e.preventDefault();
    }

    return (
        <div id="foodSection" >
          <Header headerText="Food tracker" />
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
            {foodData.map((food, index) => {
              return (
                  <li key={index} index={index}>{food}</li>
              )
            })}
          </ul>
          <SaveButton />
        </div>
    )
}

export default FoodInput;