import React from "react";

function UserInputNav({ updateDisplay, currentDate }){
    function handleClick(e){
        const selection = e.target.name;
        
        switch(selection){
            case "foodSection":
                updateDisplay({
                    foodSection: true,
                    sleepSection: false,
                    pottySection: false,
                    notesSection: false
                })
                break;
            case "sleepSection":
                updateDisplay({
                    foodSection: false,
                    sleepSection: true,
                    pottySection: false,
                    notesSection: false
                })
                break;
            case "pottySection":
                updateDisplay({
                    foodSection: false,
                    sleepSection: false,
                    pottySection: true,
                    notesSection: false
                })
                break;
            case "notesSection":
                updateDisplay({
                    foodSection: false,
                    sleepSection: false,
                    pottySection: false,
                    notesSection: true
                })
                break;
            default:
                console.error();
        }
        e.preventDefault();
    }
    return(
        <div className="userInputNav">
            <p id="currentDate">{currentDate}</p>
            <button name="foodSection" onClick={handleClick}>Food</button>
            <button name="sleepSection" onClick={handleClick}>Sleep</button>
            <button name="pottySection" onClick={handleClick}>Poop</button>
            <button name="notesSection" onClick={handleClick}>Notes</button>
        </div>
    )
}

export default UserInputNav;