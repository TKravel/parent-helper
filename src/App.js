import React from "react";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world!</p>
      </header>
      <form>
        <div>
          <input type="text" placeholder="Enter food here..."></input>
          <button>Add</button>
        </div>
        <div>
          <label for="firstNapStart">Start of nap:</label>
          <input type="time" id="firstNapStart" name="firstNapStart" />
          <label for="firstNapEnd">End of nap:</label>
          <input type="time" id="firstNapEnd" name="firstNapEnd" />
          <br />
          <label for="secondNapStart">Start of nap:</label>
          <input type="time" id="secondNapStart" name="secondNapStart" />
          <label for="secondNapEnd">End of nap:</label>
          <input type="time" id="secondNapEnd" name="secondNapEnd" />
          <br />
          <label for="bedTime">Bed time:</label>
          <input type="time" id="bedTime" name="bedTime" />
          <label for="wakeTime">Wake up:</label>
          <input type="time" id="wakeTime" name="wakeTime" />
          <button>Submit</button>
        </div>
        <div>
          <p>0</p>
          <button>-</button><button>+</button>
        </div>
        <div>
          <label for="notes">Notes</label>
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
