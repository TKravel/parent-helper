import React, {useState} from "react";
import FoodInput from "./components/FoodInput";


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world!</p>
      </header>
      <FoodInput />
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
    </div>
  );
}

export default App;
