import React, {useState} from "react";
import SleepInput from "./SleepInput";
import { globalData } from "../App";
import NapError from "./NapError";


function SleepSection(){
   
    const [naps, setNaps] = useState({
        wakeUp: "00:00",
        firstNapStart: "00:00",
        firstNapEnd: "00:00",
        secondNapStart: "00:00",
        secondNapEnd: "00:00",
        bedTime: "00:00"
    })
    const [openNap1, setOpenNap1] = useState(false);
    const [openNap2, setOpenNap2] = useState(false);
    
    

    // Object.entries(naps).forEach(([key, value], index) => {
    //     console.log(key, value, index);
    // })

    if(naps.wakeUp === "" && globalData.sleep.wakeUp !== ""){
        setNaps(globalData.sleep);
    }

        //     const date = new Date();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();

    // const currentTime = hours + ":" + minutes;
    function handleChange(e){
        const { name, value } = e.target;
        setNaps( values => {
            return {...values,
            [name]: value }
        })
        e.preventDefault();
    }

    function toggleNap1(){
        setOpenNap1(!openNap1);
    }

    function toggleNap2(){
        setOpenNap2(!openNap2);
    }

    return(
    <div id="sleepSection">
        <header>
            <h1>Sleep tracker</h1>
        </header>
        <SleepInput
            change={handleChange}
            data={naps.wakeUp}
            name="wakeUp"
            label="Wake up:"
        />
        { openNap1 === false ? 
            <button onClick={toggleNap1}>Add nap</button> : 
            <>
            <button onClick={toggleNap1}>-</button>
            <SleepInput
                change={handleChange}
                data={naps.firstNapStart}
                name="firstNapStart"
                label="Start of nap:"
            />
            <NapError napData={naps} selectedNap="firstNapStart"/>
            <SleepInput
                change={handleChange}
                data={naps.firstNapEnd}
                name="firstNapEnd"
                label="End of nap:"
            />
            <NapError napData={naps} selectedNap="firstNapEnd"/>
            </>
        }
        <br />
        { openNap2 === false ? 
            <button onClick={toggleNap2}>Add nap</button> :
            <>
            <button onClick={toggleNap2}>-</button>
            <SleepInput
                change={handleChange}
                data={naps.secondNapStart}
                name="secondNapStart"
                label="Start of nap:"
            />
            <NapError napData={naps} selectedNap="secondNapStart"/>
            <SleepInput
                change={handleChange}
                data={naps.secondNapEnd}
                name="secondNapEnd"
                label="End of nap:"
            />
            <NapError napData={naps} selectedNap="secondNapEnd"/>
            </>
        }
        <SleepInput
            change={handleChange}
            data={naps.bedTime}
            name="bedTime"
            label="Bed time:"
        />
        <NapError napData={naps} selectedNap="bedTime"/>
        <button>Save</button>
    </div>
    )
}

export default SleepSection;