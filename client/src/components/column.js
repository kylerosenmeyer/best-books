import React from "react"

function Column(props) {

    return (
        <div className={props.className}>{props.children}</div>
    )
}

export default Column