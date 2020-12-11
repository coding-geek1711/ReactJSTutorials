import React from "react";

// function FirstComponent() {
//   return <h1>Hello Maheswaran</h1>;
// }

// Functional First component
// const FirstComponent = () => <h1>Hello Maheswaran</h1>;

// Class First Component
import { Component } from "react"; // always import this for class components

class FirstComponent extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

export default FirstComponent;
