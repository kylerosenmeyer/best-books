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
                        <SubTitle className="cardSubTitle" subTitle={this.props.subTitle} />
                        <Text className="cardAuthor" text={this.props.author} />
                    </Column>
                </Row>

                <Row className="cardBody">
                    <Column className="col-md-4">
                        <Image className="cardImg" image={this.props.image} alt={this.props.alt}/>
                    </Column>
                    <Column className="col-md-8">
                        <Text className="cardDescription" text={this.props.story} />
                        <Button className="save" 
                                href={this.props.source}
                                saved={this.props.saved}
                                name={["Save ", <i class="far fa-bookmark"></i>]} />
                        <Button className="readMore" name={["Read  ", <i className="fas fa-book-open"></i>]}/>
                    </Column>
                </Row>
            </div>
        )
    }
}

export default ReactComponent