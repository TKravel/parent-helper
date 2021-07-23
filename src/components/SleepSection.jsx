import React, {useState} from "react";
import SleepInput from "./SleepInput";

function SleepSection(){

    const [naps, setNaps] = useState({
        wakeUp: '',
        firstNapStart: '',
        firstNapEnd: '',
        secondNapStart: '',
        secondNapEnd: '',
        bedTime: ''
    })

    function handleChange(e){
    e.preventDefault();
    const userData = e.target.value;
    const time = e.target.name;

    console.log(e);
    console.log(time);
    console.log(userData);

    switch(time){
        case "wakeTime":
        setNaps(prevValue => { 
            return {
            wakeUp: userData,
            firstNapStart: prevValue.firstNapStart,
            firstNapEnd: prevValue.firstNapEnd,
            secondNapStart: prevValue.secondNapStart,
            secondNapEnd: prevValue.secondNapEnd,
            bedTime: prevValue.bedTime
            }
        });
        
        break;
        case "firstNapStart":
        setNaps(prevValue => { 
            return {
            wakeUp: prevValue.wakeUp,
            firstNapStart: userData,
            firstNapEnd: prevValue.firstNapEnd,
            secondNapStart: prevValue.secondNapStart,
            secondNapEnd: prevValue.secondNapEnd,
            bedTime: prevValue.bedTime}
        });
        break;
        case "firstNapEnd":
        setNaps(prevValue => { 
            return {
            wakeUp: prevValue.wakeUp,
            firstNapStart: prevValue.firstNapStart,
            firstNapEnd: userData,
            secondNapStart: prevValue.secondNapStart,
            secondNapEnd: prevValue.secondNapEnd,
            bedTime: prevValue.bedTime}
        });
        break;
        case "secondNapStart":
        setNaps(prevValue => { 
            return {
            wakeUp: prevValue.wakeUp,
            firstNapStart: prevValue.firstNapStart,
            firstNapEnd: prevValue.firstNapEnd,
            secondNapStart: userData,
            secondNapEnd: prevValue.secondNapEnd,
            bedTime: prevValue.bedTime}
        });
        break;
        case "secondNapEnd":
        setNaps(prevValue => { 
            return {
            wakeUp: prevValue.wakeUp,
            firstNapStart: prevValue.firstNapStart,
            firstNapEnd: prevValue.firstNapEnd,
            secondNapStart: prevValue.secondNapStart,
            secondNapEnd: userData,
            bedTime: prevValue.bedTime}
        });
        break;
        case "bedTime":
        setNaps(prevValue => { 
            return {
            wakeUp: prevValue.wakeUp,
            firstNapStart: prevValue.firstNapStart,
            firstNapEnd: prevValue.firstNapEnd,
            secondNapStart: prevValue.secondNapStart,
            secondNapEnd: prevValue.secondNapEnd,
            bedTime: userData}
        });
        break;
        default: 
        console.log(Error);
        break;
        }
    }

    return(
    <div>
        <SleepInput 
            key="0" 
            change={handleChange}
            data={naps.wakeUp}
            name="wakeTime"
            label="Wake up:"
        />
        <SleepInput
            key="1"
            change={handleChange}
            data={naps.firstNapStart}
            name="firstNapStart"
            label="Start of nap:"
        />
        <SleepInput
            key="2"
            change={handleChange}
            data={naps.firstNapEnd}
            name="firstNapEnd"
            label="End of nap:"
        />
        <SleepInput
            key="3"
            change={handleChange}
            data={naps.firstNapEnd}
            name="secondNapStart"
            label="Start of nap:"
        />
        <SleepInput
            key="4"
            change={handleChange}
            data={naps.firstNapEnd}
            name="secondNapEnd"
            label="End of nap:"
        />
        <SleepInput
            key="5"
            change={handleChange}
            data={naps.firstNapEnd}
            name="bedTime"
            label="Bed time:"
        />
        <button>Submit</button>
    </div>
    )
}

export default SleepSection;