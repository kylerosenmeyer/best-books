import React, {Component} from "react"

import Title from "./h1"
import SubTitle from "./h3"
import Image from "./image"
import Text from "./p"
import Button from "./button"
import Row from "./row"
import Column from "./column"

class LibraryCard extends Component {

    remove = ["remove", <i className="fa fa-trash"> </i>]
    
    render(){
        
        return (

            <div className="bookWrapper">
                <Row className="cardHeader">
                    <Column className="col-12">

                        <Title className="cardTitle" 
                               title={this.props.title} 
                        />
                        
                        {this.props.authors.map((author, key) => (
                            <SubTitle className="cardAuthor" 
                                      subTitle={author} 
                                      key={key} 
                            />
                        ))}
                        

                    </Column>
                </Row>

                <Row className="cardBody">
                    <Column className="col-md-4">

                        <Image className="cardImg" 
                               image={this.props.image} 
                               alt={this.props.alt} 
                        />

                    </Column>
                    <Column className="col-md-8">

                        <Text className="cardDescription" 
                              text={this.props.story} 
                        />

                        <Text className="cardCategoryTitle" 
                              text="Categories: " 
                        />
                        
                        {this.props.categories.map((category, key) => (
                            <Text className="cardCategory" 
                                  text={category}  
                                  key={key}
                            />
                        ))}

                        <Text className="cardPages" 
                              text={`Page Count: ${this.props.pageCount}.`}
                        />

                    </Column>
                </Row>
                <Row className="cardBotton justify-content-end">
                    <Button className="remove align-self-end" 
                            function={this.props.removethisbook}
                            name={<i className="fa fa-trash"> </i>} 
                    />

                    <Button className="readMore align-self-end" 
                            function={this.props.readthisbook}
                            name={<i className="fas fa-book-open"></i>}
                    />
                </Row>
            </div>
        )
    }
}

export default LibraryCard