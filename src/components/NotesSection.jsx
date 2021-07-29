import React, { useState } from "react";
import TextInput from "./TextInput";
import { globalData } from "../App";

function NotesSection(props){
    const [notes, setNotes] = useState([])
    const [notesInput, setNotesInput] = useState("");

    if(notes.length === 0 && globalData.notes.length > 0){
        setNotes(globalData.notes);
    }

    function handleChange(e){
        const inputData = e.target.value;
        setNotesInput(inputData);
    }

    function handleClick(e){
        setNotes(prevValue => {
            return [...prevValue, notesInput];
        })
        globalData.notes.push(notesInput);
        setNotesInput("");
        e.preventDefault();
    }

    return(
        <div id="notesSection" className={props.currentDisplay}>
        <TextInput 
            label="Enter notes"
            name="notes"
            placeholder="Quick notes..."
            updateChange={handleChange}
            updateState={handleClick}
            stateData={notesInput}
          />
          <ul>
              {notes.map((note, index) => {
                  return(
                      <li key={index}>{note}</li>
                  )
              })}
          </ul>
        </div>

    )
}

export default NotesSection;