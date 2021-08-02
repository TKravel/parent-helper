import React, {useState} from "react";
import Header from "./Header";
import SleepInput from "./SleepInput";

function SleepSection({ napData, setNapData }){
   
    
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
        const { name, value } = e.target;
        setNapData( values => {
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
        <Header headerText="Sleep tracker" />
        <SleepInput
            name="wakeUp"
            label="Wake up:"
            napData={napData.wakeUp}
            sectionData={napData}
            onChange={handleChange}
        />
        { openNap1 === false ? 
            <button onClick={toggleNap1}>Add nap</button> : 
            <>
            <button onClick={toggleNap1}>-</button>
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
        <br />
        { openNap2 === false ? 
            <button onClick={toggleNap2}>Add nap</button> :
            <>
            <button onClick={toggleNap2}>-</button>
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
        <button>Save</button>
    </div>
    )
}

export default SleepSection;