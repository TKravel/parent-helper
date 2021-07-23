import React from "react";
import FoodSection from "./components/FoodSection";
import SleepSection from "./components/SleepSection";
import PottySection from "./components/PottySection";
import NotesSection from "./components/NotesSection";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world!</p>
      </header>
      <FoodSection />
      <SleepSection />
      <PottySection />
      <NotesSection />
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
