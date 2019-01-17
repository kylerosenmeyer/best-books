import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'

import Container from "./components/container"
import Row from "./components/row"
import Column from "./components/column"
import Card from "./components/card"
import Title from "./components/h1"
import test from "./test-data.json"

class App extends Component {
  render() {
    return (
      <Container className="appWrapper">
        <Row className="header">
          <Column className="col-12">
            <Title className="mainTitle" Title="Library App"/>
          </Column>
        </Row>

        <Row className="cardSection">
          <Column className="col-12">
            {test.map((book, key)=> (
              <Card title={book.title} 
                    subTitle={book.subtitle} 
                    author={book.author}
                    image={book.image}
                    source={book.source}
                    saved={book.saved} 
                    story={book.description}
                    key={key} />
            ))}
          </Column>
        </Row>
      </Container>
    )
  }
}

export default App
