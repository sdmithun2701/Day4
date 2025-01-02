import {useEffect, useState} from 'react'
function Exmp(){
    const [value,setValue] = useState(0)
    const f=()=>{
        setValue(value+1)
    }
    useEffect(()=>{
        console.log("Updated")
        return(()=>{
            console.log("The is Update")
        })
    },[value])
    return(
        <div>
            <button onClick={f}>(+)</button>
            <h1>{value}</h1>
        </div>
    )
}
export default Exmp;