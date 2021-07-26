import React from "react";

function UserInputNav(props){

    function handleClick(e){
        const selection = e.target.name;
        
        switch(selection){
            case "foodSection":
                props.updateDisplay({
                    foodSection: "sectionOpen",
                    sleepSection: "sectionHidden",
                    pottySection: "sectionHidden",
                    notesSection: "sectionHidden"
                })
                break;
            case "sleepSection":
                props.updateDisplay({
                    foodSection: "sectionHidden",
                    sleepSection: "sectionOpen",
                    pottySection: "sectionHidden",
                    notesSection: "sectionHidden"
                })
                break;
            case "pottySection":
                props.updateDisplay({
                    foodSection: "sectionHidden",
                    sleepSection: "sectionHidden",
                    pottySection: "sectionOpen",
                    notesSection: "sectionHidden"
                })
                break;
            case "notesSection":
                props.updateDisplay({
                    foodSection: "sectionHidden",
                    sleepSection: "sectionHidden",
                    pottySection: "sectionHidden",
                    notesSection: "sectionOpen"
                })
                break;
            default:
                console.error();
        }   
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