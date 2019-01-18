import React from "react"
import Title from "./h1"
import SubTitle from "./h3"

function Jumbotron(props) {
    
    return(
        <div className="jumbotron jumbotron-fluid">
            <Title className="mainTitle" title={props.title} />
            <SubTitle className="mainSubTitle" subTitle={props.subTitle} />
        </div>
    )
    
}

export default Jumbotron 