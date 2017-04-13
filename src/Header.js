import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {


  render() {
    return (
      <div className="Header">
        <h2 className="HeaderText">
          {this.props.text} 
        </h2>
      </div>
    )
  }
}


