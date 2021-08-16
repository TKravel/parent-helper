import React, { useState, useEffect } from "react";

function flatenData(appData){
    const flatData = []
    flatData.length = 0;
    
    
    appData.map( item => {
        let result = {
            date: "",
            food: "",
            poop: 0,
            "Wake up": "",
            "Nap 1": "",
            "Nap 2": "",
            "Bed time": "",
            notes: ""
        }
        Object.entries(item).forEach( ([key, value]) => {
            if(key === "_id" || key === "__v"){
                return null;
            }
            if(Array.isArray(value)){
                if(value.length === 0){
                    value = "No data";
                    result[key] = value;
                } else {
                    value = value.join(", ")
                    result[key] = value;
                }
            } else if(typeof item[key] === 'object' && item[key] !== null && !Array.isArray(item[key])){
                const wUp = item[key].wakeUp;
                const fNapStart = item[key].firstNapStart;
                const fNapEnd = item[key].firstNapEnd;
                const sNapStart = item[key].secondNapStart;
                const sNapEnd = item[key].secondNapEnd;
                const bTime = item[key].bedTime;

                result["Wake up"] = convertTo12HR(wUp);
                result["Nap 1"] = calcNapTime(fNapStart, fNapEnd);
                result["Nap 2"] = calcNapTime(sNapStart, sNapEnd);
                result["Bed time"] = convertTo12HR(bTime);
            } else {
                result[key] = value;
            }
            
        })
        flatData.push(result)
    })
    
    return flatData
}

function calcNapTime(t1, t2){
    const time1 = t1.split(":");
    const time2 = t2.split(":");
    const date1 = new Date(0,0,0, time1[0], time1[1])
    const date2 = new Date(0,0,0, time2[0], time2[1])
    const elapsed = (date2 - date1); 
    const minutes = (elapsed / 1000) / 60;
    const hours = Math.floor(minutes / 60);

    if(hours === 0 && minutes === 0){
        return "Refusal"
    } else if(hours === 0){
        return (minutes % 60) + " mins";
    } else if (hours === 1){
        return hours + " hr " + (minutes % 60) + " mins";
    } else {
        return hours + " hr " + (minutes % 60) + " mins";
    }
}

function convertTo12HR(time){  
    let [ hours, minutes ] = time.split(":");
    const AmOrPm = hours >= 12 ? 'pm' : 'am';
    hours = (hours % 12) || 12;
    return hours + ":" + minutes + " " + AmOrPm;
}
    

function DataTable(){

    

  useEffect(()=> {
    fetch("/api/loadTable")
      .then((res) => res.json())
      .then((data) => {
        const readyData = flatenData(data);

        if(dataRecords.length === 0){
            setData(readyData)
        }
      })
      
  })
    
    
    const [dataRecords, setData] = useState([]);

    function GetHeadings(){
        const headings = Object.keys(dataRecords[0]);
        
        return headings.map((item, index)=> {
            if(item === "_id" || item === "__v"){
                return null;
            } else {
                return <th key={index}>{item}</th>
            }
        })
    } 

    function CreateRows(){
        return dataRecords.map((item, index) => {
            return (<tr key={index}><CreateData key={index} item={item} /></tr>)
        })
    }

    function CreateData({item}){
        const keys = Object.keys(dataRecords[0]);
        return keys.map((key, index)=>{
                return <td key={item[key] + index}>{item[key]}</td>
            })
        
    }

    
    
    return (
        
    <>
    {dataRecords.length === 0 ?
        <p>Loading data...</p> :
        <table>
            <tbody>
                <tr>
                    <GetHeadings />
                </tr>
                <CreateRows />
            </tbody>
        </table>
    }
            </>
            
    )
}


export default DataTable;