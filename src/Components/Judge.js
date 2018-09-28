import React, { Component } from 'react';

export default class Judge extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stars: 0,
      available: false
    }

    this.applaud = this.applaud.bind(this)
    this.provideStars = this.provideStars.bind(this)
  }

  applaud() {
    //Send this applaud status to Kid.js
    this.props.applause()
  }

  shouldComponentUpdate(props, state) {
    return state.stars <= 5
  }

  provideStars() {
    let { stars } = this.state;
    if(stars >= 5) {
      this.props.qualify()
    }
    this.setState({ stars: ++stars })
  }

  render() {
    const { stars, available } = this.state;

    return (
      <div>
        <button type="button" onClick={this.applaud}>
          Appreciate performance
       </button>
        <button type="button" onClick={this.provideStars}>
          Provide stars
       </button>

        Kid is available: {available}

        Stars gained: {stars}
      </div>
    );
  }
}
