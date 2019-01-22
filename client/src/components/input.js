import React from "react"

function Input(props) {

    return (
        <input className="searchInput" onChange={props.update} value={props.value} />
    )
    
}

export default Input