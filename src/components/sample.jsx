import { useState } from "react";

// let arr = ["kaja","moideen","harish"];
const Sample = ()=>{
    const ini = "kaja";
    const [getState,setState] = useState(ini);
    var count = 0;
    count++;
    console.log(count)
    return(
        <>
        <input type="text" value={getState} onChange={(e)=>{setState(e.target.value)}}/>
        </>
    )
} 

export default Sample;