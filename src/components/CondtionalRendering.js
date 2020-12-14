import React, { Component } from 'react'

class CondtionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true,
        }
    }
    
    render() {
        // // if else rendering
        // if (this.state.isLoggedIn){
        //     return <div>Welcome Maheswaran</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }
        /*
        *** Why cant we use if else inside just for messages above?
        ==> if else doesnt work in JSX, since JSX is just syntactic sugar for 
        easier writing of HTML elements
        */
        // // element variables and ternary operators
        let message = this.state.isLoggedIn?<div>Welcome Maheswaran</div>:<div>Welcome Guest</div>
        return message
    }
}

export default CondtionalRendering
