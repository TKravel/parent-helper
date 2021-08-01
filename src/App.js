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

  // Section display state

  const [display, setDisplay] = useState({
    foodSection: true,
    sleepSection: false,
    pottySection: false,
    notesSection: false 
  });

  // Food tracker State

  const [food, setFood] = useState([]);

  // Sleep tracker State

  const [naps, setNaps] = useState({
    wakeUp: "00:00",
    firstNapStart: "00:00",
    firstNapEnd: "00:00",
    secondNapStart: "00:00",
    secondNapEnd: "00:00",
    bedTime: "00:00"
})

  // Potty tracker state

  const [count, setCount] = useState(0);

  //  Note tracker state

  const [notes, setNotes] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <p>Parent Helper</p>
        <p>A daily log that is connected where ever you go</p>
      </header>
      { display.foodSection ? 
        <FoodSection foodData={food} setFoodData={setFood}/> : null }
      { display.sleepSection ? 
        <SleepSection napData={naps} setNapData={setNaps}/> : null}
      { display.pottySection ? 
        <PottySection pottyData={count} setPottyData={setCount}/> : null}
      { display.notesSection ? 
        <NotesSection noteData={notes} setNoteData={setNotes}/> : null}
      <UserInputNav 
        updateDisplay={setDisplay}
      />
    </div>
  );
}

export default App;
export { globalData } ;
