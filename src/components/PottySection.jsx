import React, { useState } from "react";
import Counter from "./Counter";

function PottySection(){
    const [count, setCount] = useState(0);

    

    return (
        <div>
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