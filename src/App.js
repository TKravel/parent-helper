import React, { useState } from "react";
import FoodSection from "./components/FoodSection";
import SleepSection from "./components/SleepSection";
import PottySection from "./components/PottySection";
import NotesSection from "./components/NotesSection";
import UserInputNav from "./components/userInputNav";

const globalData = {
  food: [],
  sleep: {
    wakeUp: '',
    firstNapStart: '',
    firstNapEnd: '',
    secondNapStart: '',
    secondNapEnd: '',
    bedTime: ''
  },
  poop: 0,
  notes: []
}

function App() {

  const [display, setDisplay] = useState({
    foodSection: true,
    sleepSection: false,
    pottySection: false,
    notesSection: false 
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world!</p>
      </header>
      { display.foodSection ? 
        <FoodSection /> : null }
      { display.sleepSection ? 
        <SleepSection /> : null}
      { display.pottySection ? 
        <PottySection /> : null}
      { display.notesSection ? 
        <NotesSection /> : null}
      <UserInputNav 
        updateDisplay={setDisplay}
      />
    </div>
  );
}

export default App;
export { globalData } ;
