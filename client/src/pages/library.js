import React, {Component} from 'react'

import Container from "../components/container"
import Row from "../components/row"
import Column from "../components/column"
import Card from "../components/card"
import Jumbotron from "../components/jumbotron"
import Footer from "../components/footer"
import Search from "../components/search"

import test from "../test-data.json"

class Library extends Component {
    render() {
      return (

        <Container className="appWrapper">
  
          <Jumbotron title="Library App" subTitle="The best library app ever." />

          <Search />
  
          <Row className="cardSection">
            <Column className="col-12">
              {test.map((book, key)=> (
                <Card title={book.title} 
                      subTitle={book.subtitle} 
                      author={book.author}
                      image={book.image}
                      alt={book.title}
                      source={book.source}
                      saved={book.saved} 
                      story={book.description}
                      key={key} />
              ))}
            </Column>
          </Row>

          <Footer />
        </Container>

        
      )
    }
  }

  export default Library

