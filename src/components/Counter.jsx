import React from "react";
import { globalData } from "../App";

function Counter(props){
    
    function increaseCount(){
        props.updateCount(prevCount => {
            return prevCount + 1;
        })
        globalData.poop += 1;
        console.log(globalData.poop);
    }

    function decreaseCount(){
        if(props.currentCount === 0){
            return;
        } else {
            props.updateCount(prevCount => {
                return prevCount - 1;
            })
            globalData.poop -= 1;
            console.log(globalData.poop);
        }
    }

    return(
        <>
        <button onClick={decreaseCount}>-</button>
        <button onClick={increaseCount}>+</button>
        </>
    )
}

export default Counter;