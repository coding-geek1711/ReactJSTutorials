import React, { Component } from 'react'

// export class BindingEventHandlers extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              message:"Hello"
//         }
//     }
//     clickHandler(){
//         console.log(this);
//         this.setState({
//             message:"GoodBye"
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//                 {/* <button onClick = {this.clickHandler}>Click</button>  */}
//                 Ways to bind the this keyword to event handler are:
//                 {/* <button onClick={this.clickHandler.bind(this)}>Click Me!!!</button> */}
//                 {/* <button onClick={() => this.clickHandler()}>Click me!!</button> */}
//                 {/* THIRD CASE IS DEFINED IN NEW CLASS */}
//             </div>
//         )
//     }
// }


export class BindingEventHandlers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }

        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler() {
        this.setState({
            message:"GoodBye"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>Click Me !!!!</button>
            </div>
        )
    }
}


export default BindingEventHandlers
