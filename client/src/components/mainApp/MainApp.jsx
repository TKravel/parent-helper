import React, { useState, useEffect }  from 'react';
import FoodSection from "./foodSection/FoodSection";
import SleepSection from "./sleepSection/SleepSection";
import PottySection from "./poopSection/PottySection";
import NotesSection from "./notesSection/NotesSection";
import UserInputNav from "./userInputNav";
import DataTable from "./DataTable";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';



library.add(faPlus, faMinus);

const date = new Date()
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear().toString().substring(2,4);

const currentDate = month + "/" + day + "/" + year;
console.log(currentDate);

function MainApp(){
      // Section display state

  const [display, setDisplay] = useState({
    foodSection: true,
    sleepSection: false,
    pottySection: false,
    notesSection: false 
  });

  const [appState, setAppState] = useState({
    food: [],
    sleep: {
      wakeUp: '00:00',
      firstNapStart: '00:00',
      firstNapEnd: '00:00',
      secondNapStart: '00:00',
      secondNapEnd: '00:00',
      bedTime: '00:00'
    },
    poop: 0,
    notes: []
  })

  function handleStateChange(sectionName, updatedState){
    switch (sectionName) {
      case "food":
        setAppState(prevValue => {
          return {
            ...prevValue,
            food: [...prevValue.food, updatedState]
          }
        })
        break;
      case "sleep":
        const { name, value } = updatedState;
        console.log(updatedState)
        setAppState(prevValue => {
          return {
            ...prevValue,
            sleep: {
              ...prevValue.sleep,
              [name]: value
            }
          }
        })
        break;
      case "poop":
        setAppState(prevValue => {
          return {
            ...prevValue,
            poop: updatedState
          }
        })
        break;
      case "notes":
        setAppState(prevValue => {
          return {
            ...prevValue,
            notes: [...prevValue.notes, updatedState]
          }
        })
        break;
      default:
        console.log("error")
        break;
    }
  }

  useEffect(()=> {
    fetch("/api/loadLog")
      .then((res) => res.json())
      .then((data) => {
        setAppState({
          food: data.food,
          sleep: data.sleep,
          poop: data.poop,
          notes: data.notes
        })
        
      })
      
  }, [])

    return(
        <>
        <div className="container">
        { display.foodSection ? 
          <FoodSection foodData={appState.food} onFoodChange={handleStateChange}/> : null }
        { display.sleepSection ? 
          <SleepSection napData={appState.sleep} onNapChange={handleStateChange}/> : null}
        { display.pottySection ? 
          <PottySection poopData={appState.poop} onPoopChange={handleStateChange}/> : null}
        { display.notesSection ? 
          <NotesSection noteData={appState.notes} onNoteChange={handleStateChange}/> : null}
        <UserInputNav 
          updateDisplay={setDisplay}
          currentDate={currentDate}
        />
      </div>
      <div id="tableContainer">
        <DataTable />
      </div>
      </>
    )
}

export default MainApp;