import React, { Component } from "react";
import ReactDOM from "react-dom";
import Practice from "./Components/Practice";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Practice text="test"/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
