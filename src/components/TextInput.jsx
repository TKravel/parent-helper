import React, { useState } from "react";

function TextInput(props){
    const [error, setError] = useState({
        error: false,
        message: "Input required"
    });

    function validateInput(e){
        if(props.stateData === ""){
            setError(prevValue => {
                return({
                    error: true,
                    message: prevValue.message
                })
            })
            e.preventDefault();
        } else {
            setError(prevValue => {
                return({
                    error: false,
                    message: prevValue.message
                })
            })
            props.updateState(e);
            e.preventDefault();
        }
        
    }

    return(
        <form>
            <label htmlFor={props.name}>{props.label}</label><br />
            <input type="text" name={props.name} onChange={props.updateChange} value={props.stateData} placeholder={props.placeholder} />
            <button onClick={validateInput}>Add</button>
            { error.error === !false ? <p>{error.message}</p> : null }
        </form>
    )
}

export default TextInput;