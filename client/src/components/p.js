import React from "react"

function Text(props) {

    return (
        <p className={props.className} 
           data-id={props.id}>
        
        {props.text}
        
        </p>
    )
}

export default Text