import React, {Component} from "react"

import Title from "./h1"
import SubTitle from "./h3"
import Image from "./image"
import Text from "./p"
import Button from "./button"
import Row from "./row"
import Column from "./column"

class ReactComponent extends Component {
    
    render(){
        
        return (

            <div class="bookWrapper">
                <Row className="cardHeader">
                    <Column className="col-12">
                        <Title className="cardTitle" title={this.props.title} />
                        <SubTitle className="cardSubtitle" subTitle={this.props.subTitle} />
                        <Text className="cardAuthor" text={this.props.author} />
                    </Column>
                </Row>

                <Row className="cardBody">
                    <Column className="col-sm-4">
                        <Image className="cardImg" image={this.props.image}/>
                    </Column>
                    <Column className="col-sm-8">
                        <Text className="cardDescription" text={this.props.story} />
                        <Button className="save" 
                                href={this.props.source}
                                saved={this.props.saved} />
                        <Button className="remove"/>
                    </Column>
                </Row>
            </div>
        )
    }
}

export default ReactComponent