import React, { useState } from "react";
import TextInput from "./TextInput";
import Header from "./Header";

function NotesSection({ noteData, setNoteData }){
    
    const [notesInput, setNotesInput] = useState("");

    function handleChange(e){
        const inputData = e.target.value;
        setNotesInput(inputData);
    }

    function handleClick(e){
        setNoteData(prevValue => {
            return [...prevValue, notesInput];
        })
        setNotesInput("");
        e.preventDefault();
    }

    return(
        <div id="notesSection">
            <Header headerText="Note tracker" />
            <TextInput 
                label="Enter notes"
                name="notes"
                placeholder="Quick notes..."
                updateChange={handleChange}
                updateState={handleClick}
                stateData={notesInput}
            />
            <ul>
                {noteData.map((note, index) => {
                    return(
                        <li key={index}>{note}</li>
                    )
                })}
            </ul>
            <button>Save</button>
        </div>

    )
}

export default NotesSection;