import React, {useState} from "react";
// import { globalData } from "../App";

function SleepInput(props){
    const [display, setDisplay] = useState(false);

    
    
    

    function handleBlur(e){
        if(props.data !== "--:--"){
            setDisplay(false);
            e.preventDefault();
        }
        console.log(e.target.name);
    }

    function editTime(){
        setDisplay(true);
    }

    function convertTo12HR(time){
        
        let [ hours, minutes ] = time.split(":");
        const AmOrPm = hours >= 12 ? 'pm' : 'am';
        hours = (hours % 12) || 12;
        return hours + ":" + minutes + " " + AmOrPm;
    }

    return(
        <div>
            {display === true ? 
            <>
            <label htmlFor={props.name}>{props.label}</label>
            <input type="time" id={props.name} name={props.name} onChange={props.change} onBlur={handleBlur} value={props.data}/></> :
            <>
            <p>{props.label}</p> 
            <p onClick={editTime}>
                { props.data === "00:00" ?
                    props.data :
                    convertTo12HR(props.data)
                }
            </p>
            </>
            }
        </div>
    )
}

export default SleepInput;