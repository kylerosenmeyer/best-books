import React, {Component} from "react"

import Title from "./h1"
import SubTitle from "./h3"
import Image from "./image"
import Text from "./p"
import Button from "./button"
import Row from "./row"
import Column from "./column"

class LibraryCard extends Component {
    
    render(){
        
        return (

            <div className="bookWrapper">
                <Row className="cardHeader">
                    <Column className="col-12">

                        <Title className="cardTitle" 
                               title={this.props.title} 
                               id={this.props.id}
                        />
                        
                        {this.props.authors.map((author) => (
                            <SubTitle className="cardAuthor" 
                                      subTitle={author}  
                            />
                        ))}
                        

                    </Column>
                </Row>

                <Row className="cardBody">
                    <Column className="col-md-4">

                        <Image className="cardImg" 
                               image={this.props.image} 
                               alt={this.props.alt} 
                               id={this.props.id}
                        />

                    </Column>
                    <Column className="col-md-8">

                        <Text className="cardDescription" 
                              text={this.props.story} 
                              id={this.props.id} 
                        />

                        <Text className="cardCategoryTitle" 
                              text="Categories: " 
                              id={this.props.id}
                        />
                        
                        {this.props.categories.map((category) => (
                            <Text className="cardCategory" 
                                  text={category}  
                            />
                        ))}

                        <Text className="cardPages" 
                              text={`Page Count: ${this.props.pageCount}.`}
                              id={this.props.id}
                        />

                        <Button className="remove"
                                id={this.props.id}
                                function={this.props.removethisbook}
                                name={["Remove ", <i className="fa fa-trash"></i>]} 
                        />

                        <Button className="readMore" 
                                id={this.props.id}
                                function={this.props.readthisbook}
                                name={["Open in Google Books  ", <i className="fas fa-book-open"></i>]}
                        />

                    </Column>
                </Row>
            </div>
        )
    }
}

export default LibraryCard