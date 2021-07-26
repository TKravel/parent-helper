import React, { useState } from "react";
import FoodSection from "./components/FoodSection";
import SleepSection from "./components/SleepSection";
import PottySection from "./components/PottySection";
import NotesSection from "./components/NotesSection";
import UserInputNav from "./components/userInputNav";

function App() {
  const [sectionDisplay, setSectionDisplay] = useState({
    foodSection: "sectionOpen",
    sleepSection: "sectionHidden",
    pottySection: "sectionHidden",
    notesSection: "sectionHidden"
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world!</p>
      </header>
      <FoodSection currentDisplay={sectionDisplay.foodSection}/>
      <SleepSection currentDisplay={sectionDisplay.sleepSection}/>
      <PottySection currentDisplay={sectionDisplay.pottySection}/>
      <NotesSection currentDisplay={sectionDisplay.notesSection}/>
      <UserInputNav updateDisplay={setSectionDisplay}/>
    </div>
  );
}

export default App;
