// import React from "react";

// // Event handling through Functional

// function EventHandlers() {
//   const clickHandler = () => {
//     console.log("Button Clicked")
//   }
//   return (
//     <div>
//       <button onClick = {clickHandler}>Click Me!!!</button>
//     </div>
//   );
// }

// Event handling through class components

import React, { Component } from 'react'

class EventHandlers extends Component {
  clickHandler(){
    console.log("Button Clicked");
  }
  render() {
    return (
      <div>
        <button onClick = {this.clickHandler}>Click me!!</button>        
      </div>
    )
  }
}

export default EventHandlers

