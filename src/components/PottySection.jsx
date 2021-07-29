import React, { useState } from "react";
import Counter from "./Counter";
import { globalData } from "../App"

function PottySection(props){
    const [count, setCount] = useState(0);

    if(count === 0 && globalData.poop > 1){
        setCount(globalData.poop);
    }

    return (
        <div id="pottySection" className={props.currentDisplay}>
        <p>Potty count</p>
        <p>{count}</p>
        <Counter
            currentCount={count}
            updateCount={setCount}
        />
      </div>
    )
}

export default PottySection;