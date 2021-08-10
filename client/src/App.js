import React, { useState } from "react";
import FoodSection from "./components/FoodSection";
import SleepSection from "./components/SleepSection";
import PottySection from "./components/PottySection";
import NotesSection from "./components/NotesSection";
import UserInputNav from "./components/userInputNav";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import "./index.css";
import DataTable from "./components/DataTable";
import appData from "./appData";

library.add(faPlus, faMinus);

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

const date = new Date()
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear().toString().substring(2,4);

const currentDate = month + "/" + day + "/" + year;
console.log(currentDate);

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
    <div className="app">
      <div className="App-header">
        <h1>Parent Helper</h1>
      </div>
      <div className="container">
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
          currentDate={currentDate}
        />
      </div>
      <div id="tableContainer">
        <DataTable appData={appData}/>
      </div>
    </div>
  );
}

export default App;
export { globalData } ;
