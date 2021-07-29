import React, {useState} from "react";
// import { globalData } from "../App";

function SleepInput(props){
    const [display, setDisplay] = useState(true);

    

    function handleBlur(e){
        if(props.data !== ""){
            setDisplay(false);
            e.preventDefault();
        }
    }

    function editTime(){
        setDisplay(true);
    }

    return(
        <div>
            {display === true ? 
            <>
            <label htmlFor={props.name}>{props.label}</label>
            <input type="time" id={props.name} name={props.name} onChange={props.change} onBlur={handleBlur} value={props.data}/></> :
            <>
            <p>{props.label}</p> 
            <p onClick={editTime}>{props.data}</p>
            </>
            }
        </div>
    )
}

export default SleepInput;