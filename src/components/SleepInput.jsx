import React, {useState} from "react";

function SleepInput(props){
    const [display, setDisplay] = useState(true);

    function handleBlur(e){
    setDisplay(false);
    }

    return(
        <div>
            {display === true ? 
            <>
            <label htmlFor={props.name}>{props.label}</label>
            <input type="time" id={props.name} name={props.name} onChange={props.change} onBlur={handleBlur} value={props.data}/></> :
            <>
            <p>{props.label}</p> 
            <p>{props.data}</p>
            </>
            }
        </div>
    )
}

export default SleepInput;