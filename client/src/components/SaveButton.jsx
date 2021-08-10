import React from "react";

function handleSave(){
    console.log("test");
}

function SaveButton(){
    return(
        <button 
            type="submit"
            onClick={handleSave}
            className="saveButton">
            Save
        </button>
    )
}

export default SaveButton;