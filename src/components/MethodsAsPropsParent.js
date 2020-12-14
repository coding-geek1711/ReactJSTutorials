import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsProps extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             parentName: "Parent"
        }
    }
    greetParent = (childName) => alert('Hello ' + this.state.parentName + ' from ' + childName)
    render() {
        return (
            <div>
                <MethodsAsPropsChild greetHandler = {this.greetParent}/>
            </div>
        )
    }
}

export default MethodsAsProps
