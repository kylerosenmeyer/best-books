import React from "react"

function Button(props) {
    
        
    return (
        
        <button className={props.className} 
                data-href={props.href} 
                data-saved={props.saved}
                onClick={props.function}
                data-id={props.id}
                data-pages={props.pages} >
        
        {props.name}
        
        </button>
    )
}

export default Button