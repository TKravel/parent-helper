import React from "react";
import Counter from "./Counter";
import Header from "./Header";
import SaveButton from "./SaveButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoo } from '@fortawesome/free-solid-svg-icons';

function PottySection({ pottyData, setPottyData }){
    
    return (
        <div id="pottySection" >
            <Header headerText="Poop tracker" />
            <div className="mainCardInput">
                <div id="poopInputContainer">
                    <div id="poopDisplay">
                        {pottyData === 0 ? 
                            <>
                            <p>No poop to count!</p>
                            <FontAwesomeIcon icon={faPoo} id="poopIcon"/>
                            </> :
                            <p id="countData">{pottyData}</p>
                        }
                    </div>
                    <div id="poopCounterControls">
                        <Counter
                            currentCount={pottyData}
                            updateCount={setPottyData}
                        />
                    </div>
                </div>
                <SaveButton />
            </div>
      </div>
    )
}

export default PottySection;