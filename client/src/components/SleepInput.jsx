import React, {useState} from "react";
import NapError from "./NapError";

function SleepInput({ name, label, napData, sectionData, onChange }){
    const [display, setDisplay] = useState(false);

    function handleBlur(e){
        if(napData !== "--:--"){
            setDisplay(false);
            e.preventDefault();
            console.log(napData);
        }
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
            <label htmlFor={name}>{label}</label>
            <input type="time" id={name} name={name} onChange={onChange} onBlur={handleBlur} value={napData}/>
            </> :
            <>
            <p>
                {label}
                <span onClick={editTime}>
                    { napData === "00:00" ?
                        napData :
                        convertTo12HR(napData)
                    }
                </span>
            </p>
            <NapError napData={napData} selectedNap={name} sectionData={sectionData}/>
            </>
            }
        </div>
    )
}

export default SleepInput;