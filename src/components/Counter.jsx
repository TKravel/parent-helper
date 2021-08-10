import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Counter({ currentCount, updateCount }){
    
    function increaseCount(){
        updateCount(prevCount => {
            return prevCount + 1;
        })
    }

    function decreaseCount(){
        if(currentCount === 0){
            return;
        } else {
            updateCount(prevCount => {
                return prevCount - 1;
            })
        }
    }

    return(
        <>
        <p>Change count</p>
        <button className="addSubtractButtons" onClick={decreaseCount}>
            <FontAwesomeIcon icon="minus" />
        </button>
        <button className="addSubtractButtons" onClick={increaseCount}>
            <FontAwesomeIcon icon="plus" />
        </button>
        </>
    )
}

export default Counter;