// import React from "react";

// const propsComponents = (props) => {
//   //   console.log(props);
//   return (
//     <div>
//       <h1>Hello {props.name}</h1>
//       <span>
//         {props.name} is also known as {props.alias}
//       </span>
//       <span>
//         The extra information is <br></br>
//         {props.children}
//       </span>
//     </div>
//   );
// };

import React, { Component } from "react";

class propsComponents extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <span>
          {this.props.name} is also known as {this.props.alias}
        </span>
        <br></br>
        <span>{this.props.children}</span>
      </div>
    );
  }
}

export default propsComponents;
