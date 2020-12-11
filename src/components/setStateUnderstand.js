import React, { Component } from "react";

class setStateUnderstand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  //   //   CHeck here
  //   increment = () => {
  //     console.log(this.state.count);
  //     this.state.count = this.state.count + 1;
  //   };

  //   //   CHeck Here
  //   increment = () => {
  //     console.log(this.state.count);
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   };

  // CHeck here
  increment = () => {
    console.log(`Synchronous code value ==> ${this.state.count}`);
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => console.log(`callback value ==> ${this.state.count}`)
    );
  };

  increment = () => {
    console.log(`Sync call ${this.state.count}`);
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => console.log(`callback value ==> ${this.state.count}`)
    );
  };
  incrementFive = () => {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  };
  render() {
    return (
      <div>
        <div>
          Count =={">"} {this.state.count}
        </div>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.incrementFive();
          }}
        >
          Increment Five
        </button>
      </div>
    );
  }
}

export default setStateUnderstand;
