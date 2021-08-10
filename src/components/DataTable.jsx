import React, { useState } from "react";

const flatData = []

function flatenData(appData){
    flatData.length = 0;
    
    appData.map( item => {
        let result = {}
        Object.entries(item).forEach( ([key, value]) => {
            
            if(Array.isArray(value)){
                value = value.join(", ")
                result[key] = value;
            } else if(typeof item[key] === 'object' && item[key] !== null && !Array.isArray(item[key])){
                console.log(item[key].firstNapStart)
                console.log(item[key].firstNapEnd)
                let test = item[key].firstNapStart
                let test1 = item[key].firstNapEnd
                
                console.log(calcNapTime(test, test1))
                
                // Object.entries(item[key]).forEach(([napKey, napValue]) => {
                //     result[napKey] = napValue;
                // })
                
            } else {
                result[key] = value;
            }
            
        })
        flatData.push(result)
    })
    
    console.log(flatData);
}

function calcNapTime(t1, t2){
    const time1 = t1.replace(":", "");
    const time2 = t2.replace(":", "");
    let napLength = time2 - time1;
    let testString = napLength.toString();
    console.log(testString.length)
    if(testString.length === 3){
        const formattedTime = testString.slice(0, 1) + " hr " + testString.slice(1, 3) + " mins";
        console.log(formattedTime);
    }

    console.log(napLength)
    

    
}
    

function DataTable({appData}){
    flatenData(appData);
    const [data, setData] = useState(flatData);

    function GetHeadings(){
        const headings = Object.keys(data[0]);

        return headings.map((item, index)=> {
            return <th key={index}>{item}</th>
        })
    } 

    function CreateRows({data}){
        return data.map((item, index) => {
            return (<tr key={index}><CreateData key={index} item={item} /></tr>)
        })
    }

    function CreateData({item}){
        const keys = Object.keys(data[0]);
        return keys.map(key=>{
                return <td key={item[key]}>{item[key]}</td>
            })
        
    }

    
    
    return (
        <>
        <table>
            <tbody>
                <tr>
                    <GetHeadings data={data} />
                </tr>
                <CreateRows data={data} />
            </tbody>
        </table>
                </>
            
    )
}


export default DataTable;