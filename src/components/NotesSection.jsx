import React, { useState } from "react";
import TextInput from "./TextInput";
import Header from "./Header";
import SaveButton from "./SaveButton";

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
            <div class="mainCardInput">
                <div className="textInputContainer">
                    <TextInput 
                        label="Enter notes"
                        name="notes"
                        placeholder="Quick notes..."
                        updateChange={handleChange}
                        updateState={handleClick}
                        stateData={notesInput}
                    />
                    <ul className="listTextField">
                        {noteData.length === 0 ? 
                            <li>No data to show</li> :
                            noteData.map((note, index) => {
                                return(
                                    <li key={index}>{note}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <SaveButton />
            </div>
        </div>

    )
}

export default NotesSection;