import React, { Component } from "react";

import Kid from "./Kid";
import Teacher from "./Teacher";

export default class Practice extends Component {
  state = {
    volume: 0,
    steps: []
  };

  static getDerivedStateFromProps(props, state) {
    return {
      volume: 5,
    };
  }

  sendSteps = (steps) => {
    console.log(steps)
    this.setState({ steps })
  }

  render() {
    const {
      volume,
      steps
    } = this.state
    return (
      <div>
        <p>Volume: {volume}</p>
        <Kid dressColor="aquamarine" furtherSteps={steps}/>
        <hr />
        <Teacher send={(steps) => this.sendSteps(steps)}/>
      </div>
    );
  }
}
