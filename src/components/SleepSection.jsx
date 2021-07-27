import React, {useState} from "react";
import SleepInput from "./SleepInput";

function SleepSection(props){

    const [naps, setNaps] = useState({
        wakeUp: '',
        firstNapStart: '',
        firstNapEnd: '',
        secondNapStart: '',
        secondNapEnd: '',
        bedTime: ''
    })

    function handleChange(e){
    const userData = e.target.value;
    let hours = userData.substring(0,2);
    const minutes = userData.substring(3,5);
    const sleepInputFocused = e.target.name;



    const AmOrPm = hours >= 12 ? 'pm' : 'am';
    hours = (hours % 12) || 12;
    const time12hrFormat = hours + ":" + minutes + " " + AmOrPm;

    switch(sleepInputFocused){
        case "wakeTime":
        setNaps(prevValue => { 
            return {
            wakeUp: time12hrFormat,
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
            firstNapStart: time12hrFormat,
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
            firstNapEnd: time12hrFormat,
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
            secondNapStart: time12hrFormat,
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
            secondNapEnd: time12hrFormat,
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
            bedTime: time12hrFormat}
        });
        break;
        default: 
        console.log(Error);
        break;
        }
    }

    return(
    <div id="sleepSection" className={props.currentDisplay}>
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
            data={naps.secondNapStart}
            name="secondNapStart"
            label="Start of nap:"
        />
        <SleepInput
            key="4"
            change={handleChange}
            data={naps.secondNapEnd}
            name="secondNapEnd"
            label="End of nap:"
        />
        <SleepInput
            key="5"
            change={handleChange}
            data={naps.bedTime}
            name="bedTime"
            label="Bed time:"
        />
        <button>Submit</button>
    </div>
    )
}

export default SleepSection;