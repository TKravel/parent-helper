import React from "react";

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
        <button onClick={decreaseCount}>-</button>
        <button onClick={increaseCount}>+</button>
        </>
    )
}

export default Counter;