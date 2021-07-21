import React, {useState} from "react";


function App() {
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
    <div className="App">
      <header className="App-header">
        <p>Hello world!</p>
      </header>
      <form>
        <div>
          <label htmlFor="foodInput">Enter food</label>
          <input type="text" name="foodInput" onChange={handleChange} value={foodInput} placeholder="Enter food here..." />
          <button onClick={handleClick}>Add</button>
          <ul>
            {foods.map((food, index) => {
              return (
                  <li key={index} index={index}>{food}</li>
              )
            })}
          </ul>
        </div>
        <div>
          <label htmlFor="firstNapStart">Start of nap:</label>
          <input type="time" id="firstNapStart" name="firstNapStart" />
          <label htmlFor="firstNapEnd">End of nap:</label>
          <input type="time" id="firstNapEnd" name="firstNapEnd" />
          <br />
          <label htmlFor="secondNapStart">Start of nap:</label>
          <input type="time" id="secondNapStart" name="secondNapStart" />
          <label htmlFor="secondNapEnd">End of nap:</label>
          <input type="time" id="secondNapEnd" name="secondNapEnd" />
          <br />
          <label htmlFor="bedTime">Bed time:</label>
          <input type="time" id="bedTime" name="bedTime" />
          <label htmlFor="wakeTime">Wake up:</label>
          <input type="time" id="wakeTime" name="wakeTime" />
          <button>Submit</button>
        </div>
        <div>
          <p>0</p>
          <button>-</button><button>+</button>
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <input type="text" placeholder="Quick notes..." name="notes"/>
          <button>Add Note</button>
        </div>
        <div>
          <button>Food</button>
          <button>Sleep</button>
          <button>Poop</button>
          <button>Notes</button>
        </div>
      </form>
    </div>
  );
}

export default App;
