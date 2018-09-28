import React, { Component } from "react";

import Kid from './Kid'

export default class Practice extends Component {

  state = {
    volume: 0
  }

  static getDerivedStateFromProps(props, state) {
    return {
      volume: 5,
    }
  }

  render() {
    return (
      <div>
        <p>Volume: {this.state.volume}</p>
        <Kid dressColor="aquamarine"/>
      </div>
    )
  }
}
