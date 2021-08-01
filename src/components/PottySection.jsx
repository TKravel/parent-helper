import React from "react";
import Counter from "./Counter";
import Header from "./Header";

function PottySection({ pottyData, setPottyData }){
    
    return (
        <div id="pottySection" >
            <Header headerText="Poop tracker" />
            <p>Potty count</p>
            <p>{pottyData}</p>
            <Counter
                currentCount={pottyData}
                updateCount={setPottyData}
            />
            <br />
            <button>Save</button>
      </div>
    )
}

export default PottySection;