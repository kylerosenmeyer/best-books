import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'

import Library from "./pages/library"
import Book from "./pages/book"

class App extends Component {
  render() {
    return (
      
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Library} />
            <Route exact path="/library" component={Library} />
            <Route exact path="/library/:id" component={Book} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
