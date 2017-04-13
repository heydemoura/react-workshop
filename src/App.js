import React, { Component } from 'react';
import './App.css';

// Local Components
import Header from './Header'

export default class App extends Component {
  constructor() {
    super()
    this.state = {} 
  }

  componentWillMount() {
    this.setState({text: 'Texto'})
  }

  /*
     Proxy {
      target: {
        value
      }
     }

     const { target } = Proxy

  */
  onTextChange({ target }) {
    const { value } = target
    this.setState({
      ...this.state,
      text: value 
    })
  }

  render() {
    return (
      <div className="App">
        <Header text={"Neway React"} /> 
        <Header text={"Weway React"} /> 
        <h2>{this.state.text}</h2>
        <div>
          <input type="text" onChange={this.onTextChange.bind(this)} />
        </div>
      </div> 
    );
  }
}
