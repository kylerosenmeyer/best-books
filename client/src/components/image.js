import React from "react"

function Image(props) {

    return(
     <img className={props.className} 
          src={props.image} 
          alt={props.alt} />
    )
}

export default Image