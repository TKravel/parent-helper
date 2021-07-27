import React from "react";

function UserInputNav(props){
    function handleClick(e){
        const selection = e.target.name;
        
        switch(selection){
            case "foodSection":
                props.updateDisplay({
                    foodSection: true,
                    sleepSection: false,
                    pottySection: false,
                    notesSection: false
                })
                break;
            case "sleepSection":
                props.updateDisplay({
                    foodSection: false,
                    sleepSection: true,
                    pottySection: false,
                    notesSection: false
                })
                break;
            case "pottySection":
                props.updateDisplay({
                    foodSection: false,
                    sleepSection: false,
                    pottySection: true,
                    notesSection: false
                })
                break;
            case "notesSection":
                props.updateDisplay({
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
        <div>
            <button name="foodSection" onClick={handleClick}>Food</button>
            <button name="sleepSection" onClick={handleClick}>Sleep</button>
            <button name="pottySection" onClick={handleClick}>Poop</button>
            <button name="notesSection" onClick={handleClick}>Notes</button>
        </div>
    )
}

export default UserInputNav;