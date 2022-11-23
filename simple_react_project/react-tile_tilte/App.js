import React from "react"
import boxes from "./boxes"
import Box from "./Box"



export default function App(){   
    const[state,setState] = React.useState(boxes)
    //console.log(state)
    
    function toggle(id){
    //console.log(id)
    setState(prevState => {
        return prevState.map((prevObj) => {
            return prevObj.id === id ? {...prevObj,on:!prevObj.on} : prevObj
        })
    })
    }

    const boxobj = state.map((obj) => 
        <Box 
        key={obj.id}
        val={obj.on}
        //id={obj.id}
        // handleClick={toggle} 
        handleClick={()=>toggle(obj.id)}
        />)
    return(
        <div>{boxobj}</div>
    )
}