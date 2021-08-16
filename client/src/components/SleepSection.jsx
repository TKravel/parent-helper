import React, {useState} from "react";
import Header from "./Header";
import SaveButton from "./SaveButton";
import SleepInput from "./SleepInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function SleepSection({ napData, onNapChange }){
   
    
    const [openNap1, setOpenNap1] = useState(false);
    const [openNap2, setOpenNap2] = useState(false);
    
    

    // Object.entries(naps).forEach(([key, value], index) => {
    //     console.log(key, value, index);
    // })


        //     const date = new Date();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();

    // const currentTime = hours + ":" + minutes;
    function handleChange(e){
        const section = "sleep";
        const target = e.target;
        onNapChange(section, target);
        e.preventDefault();
    }
    

    function toggleNap1(){
        setOpenNap1(!openNap1);
    }

    function toggleNap2(){
        setOpenNap2(!openNap2);
    }

    return(
    <div id="sleepSection" className="userInputSection">
        <Header headerText="Sleep tracker" />
        <div className="mainCardInput">
            <div id="sleepInputContainer">
                <SleepInput
                    name="wakeUp"
                    label="Wake up:"
                    napData={napData.wakeUp}
                    sectionData={napData}
                    onChange={handleChange}
                />
                { openNap1 === false ? 
                    <button onClick={toggleNap1} className="addNapBtn">Add nap</button> : 
                    <>
                    <button onClick={toggleNap1} className="minNapBtn">
                        1st nap <FontAwesomeIcon icon={faTimes} className="minIcon"/>
                    </button>
                    <SleepInput
                        name="firstNapStart"
                        label="Start of nap:"
                        napData={napData.firstNapStart}
                        sectionData={napData}
                        onChange={handleChange}
                    />
                    <SleepInput 
                        name="firstNapEnd"
                        label="End of nap:"
                        napData={napData.firstNapEnd}
                        sectionData={napData}
                        onChange={handleChange}
                    />
                    </>
                }
                {/* <br /> */}
                { openNap2 === false ? 
                    <button onClick={toggleNap2} className="addNapBtn">Add nap</button> :
                    <>
                    <button onClick={toggleNap2} className="minNapBtn">
                        2nd nap <FontAwesomeIcon icon={faTimes} className="minIcon"/>
                    </button>
                    <SleepInput 
                        name="secondNapStart"
                        label="Start of nap:"
                        napData={napData.secondNapStart}
                        sectionData={napData}
                        onChange={handleChange}
                    />
                    <SleepInput
                        name="secondNapEnd"
                        label="End of nap:"
                        napData={napData.secondNapEnd}
                        sectionData={napData}
                        onChange={handleChange}
                    />
                    </>
                }
                <SleepInput
                    name="bedTime"
                    label="Bed time:"
                    napData={napData.bedTime}
                    sectionData={napData}
                    onChange={handleChange}
                />
            </div>
            <SaveButton name="sleep" stateData={napData}/>
        </div>
    </div>
    )
}

export default SleepSection;