import React from "react";

function NapError({ napData, selectedNap}){
    const {
        wakeUp,
        firstNapStart,
        firstNapEnd,
        secondNapStart,
        secondNapEnd,
        bedTime
    } = napData;

    const time = selectedNap;
    let errorMessage = "";

    switch (time) {
        case "firstNapStart":
            if(firstNapStart !== "00:00" && firstNapStart < wakeUp){
                errorMessage = "Must be after wake up";
            }
            break;
        case "firstNapEnd":
            if(firstNapEnd !== "00:00" && firstNapEnd < firstNapStart){
                errorMessage = "Must be after nap start";
            }
            break;
        case "secondNapStart":
            if(secondNapStart !== "00:00" && secondNapStart < firstNapEnd){
                errorMessage = "Must be after last nap ended";
            }
            break;
        case "secondNapEnd":
            if(secondNapEnd !== "00:00" && secondNapEnd < secondNapStart){
                errorMessage = "Must be after nap start";
            }
            break;
        case "bedTime":
            if(bedTime !== "00:00" && bedTime < secondNapEnd){
                errorMessage = "Must be after last nap";
            }
            break;
        default:
            console.log("error");
            break;
    }
    return(
        <p>{errorMessage}</p>
    )
}

export default NapError;