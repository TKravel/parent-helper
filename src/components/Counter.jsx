import React from "react";

function Counter(props){
    function increaseCount(){
        props.updateCount(prevCount => {
            return prevCount + 1;
        })
    }

    function decreaseCount(){
        if(props.currentCount === 0){
            return;
        } else {
            props.updateCount(prevCount => {
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