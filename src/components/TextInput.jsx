import React from "react";

function TextInput(props){
    return(
        <form>
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text" name={props.name} onChange={props.updateChange} value={props.stateData} placeholder={props.placeholder} />
            <button onClick={props.updateState}>Add</button>
          </form>
    )
}

export default TextInput;