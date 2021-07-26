import React, { useState } from "react";
import Counter from "./Counter";

function PottySection(props){
    const [count, setCount] = useState(0);

    

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