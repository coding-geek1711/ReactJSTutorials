import React from "react";

// JSX USED HERE
// const Hello = () => {
//   return (
//     <div className="dummyClass" id="Hello">
//       <h1>Hello Maheswaran</h1>
//     </div>
//   );
// };

const Hello = () => {
  return React.createElement(
    "div",
    { id: "Hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Maheswaran")
  );
};

export default Hello;
