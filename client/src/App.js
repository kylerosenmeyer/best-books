import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'

import Library from "./pages/library"
import PersonalLibrary from "./pages/personal"

class App extends Component {
  render() {
    return (
      
      <Router>
        <div>
          <Switch>
            <Route exact path="/library" component={PersonalLibrary} />
            <Route path="/*" component={Library} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
