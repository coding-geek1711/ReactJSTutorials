import React, { Component } from "react";

class stateComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Visitor",
    };
  }
  changeMessage = () => {
    this.setState({
      message: "Button Clicked!!!",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Click Me!!!</button>
      </div>
    );
  }
}

export default stateComponent;
