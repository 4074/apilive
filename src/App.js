import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Header from './Header'
import Sider from './Sider'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Api Live" />
        <Sider />
        <div className="container">
          <div className="content">
          </div>
        </div>
      </div>
    )
  }
}
export default App
