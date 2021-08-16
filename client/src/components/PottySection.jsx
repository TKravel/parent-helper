import React from "react";
import Counter from "./Counter";
import Header from "./Header";
import SaveButton from "./SaveButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoo } from '@fortawesome/free-solid-svg-icons';

function PottySection({ poopData, onPoopChange }){
    
    return (
        <div id="pottySection" >
            <Header headerText="Poop tracker" />
            <div className="mainCardInput">
                <div id="poopInputContainer">
                    <div id="poopDisplay">
                        {poopData === 0 ? 
                            <>
                            <p>No poop to count!</p>
                            <FontAwesomeIcon icon={faPoo} id="poopIcon"/>
                            </> :
                            <p id="countData">{poopData}</p>
                        }
                    </div>
                    <div id="poopCounterControls">
                        <Counter
                            currentCount={poopData}
                            onPoopChange={onPoopChange}
                        />
                    </div>
                </div>
                <SaveButton name="poop" stateData={poopData}/>
            </div>
      </div>
    )
}

export default PottySection;