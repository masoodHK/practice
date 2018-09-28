import React, { Component } from "react";

import Kid from "./Kid";
import Teacher from "./Teacher";
import Judge from "./Judge";

export default class Practice extends Component {
  state = {
    volume: 0,
    steps: [],
    applause: false,
    qualified: false
  };

  static getDerivedStateFromProps(props, state) {
    return {
      volume: 5,
    };
  }

  sendSteps = (steps) => {
    this.setState({ steps })
  }

  sendApplause = () => {
    this.setState({ applause: true })
  }

  qualify = () => {
    this.setState({ qualified: true })
  }

  render() {
    const {
      volume,
      steps,
      applause,
      qualified
    } = this.state

    return (
      <div>
        <p>Volume: {volume}</p>
        <h3>Kid</h3>
        <Kid
        dressColor="aquamarine"
        furtherSteps={steps}
        applaud={applause}
        qualified={qualified} />
        <hr />
        <h3>Teacher</h3>
        <Teacher send={(steps) => this.sendSteps(steps)} />
        <hr />
        <h3>Judge</h3>
        <Judge applause={this.sendApplause} qualify={this.qualify}/>
      </div>
    );
  }
}
