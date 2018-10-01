import React, { Component } from 'react'
import { Route, HashRouter } from 'react-router-dom'

import './App.css'

import Header from './components/Header/index'
import Home from './components/Home/index'

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Header />

            <Route exact path="/" render={() => (
              <Home />
            )} />

          </div>
        </HashRouter>
      </div>
    )
  }
}

export default App
