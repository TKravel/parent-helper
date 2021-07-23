import React, {useState} from "react";
import FoodInput from "./components/FoodInput";
import SleepSection from "./components/SleepSection";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world!</p>
      </header>
      <FoodInput />
      <SleepSection />
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
    </div>
  );
}

export default App;
