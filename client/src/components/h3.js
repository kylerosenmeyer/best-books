import React from "react"

function SubTitle(props) {

    return(
        <h3 className={props.className} 
            data-id={props.id}>
        
        {props.subTitle}
        
        </h3>
    )
}

export default SubTitle