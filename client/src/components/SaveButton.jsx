import React from "react";

function SaveButton({ name, stateData }){
    function handleSave(){
        const data = {
            name: [name],
            data: stateData
        }

        fetch("/api/userInput", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }
    
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