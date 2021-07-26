import React, {useState} from "react";

function SleepInput(props){
    const [display, setDisplay] = useState(true);

    function handleBlur(){
        if(props.data !== ""){
            setDisplay(false);
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