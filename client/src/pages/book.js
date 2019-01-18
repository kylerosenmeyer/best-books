import React, {Component} from "react"
import Card from "../components/card"
import Container from "../components/container"
import Row from "../components/row"
import Column from "../components/column"
import Footer from "../components/footer"
import Jumbotron from "../components/jumbotron"

class Book extends Component {

    render() {

        return(

            <Container className="appWrapper">
  
            <Jumbotron title="Library App" subTitle="The best library app ever." />
    
            <Row className="cardSection">
              <Column className="col-12">
                <Card title={this.props.title} 
                      subTitle={this.props.subtitle} 
                      author={this.props.author}
                      image={this.props.image}
                      alt={this.props.title}
                      source={this.props.source}
                      saved={this.props.saved} 
                      story={this.props.description}
                    />
              </Column>
            </Row>
  
            <Footer />
          </Container>
        )
    }
}

export default Book