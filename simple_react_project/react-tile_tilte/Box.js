import React from "react"

export default function Box(props){
    //console.log(props.key)
    const styles = {
        backgroundColor:  props.val ? "black" : "white" }
    
    return (
        <div style={styles} 
        className="box" 
        /*onClick={()=>props.handleClick(props.id)}*/ 
        onClick={props.handleClick}
         ></div>
    
    )
}