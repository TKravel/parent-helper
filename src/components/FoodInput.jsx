// TODO: Break food data into breakfast, lunch, dinner, snacks.
import React, {useState} from "react";

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
          <form>
            <label htmlFor="foodInput">Enter food</label>
            <input type="text" name="foodInput" onChange={handleChange} value={foodInput} placeholder="Enter food here..." />
            <button onClick={handleClick}>Add</button>
          </form>
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