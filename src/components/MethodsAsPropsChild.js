import React from 'react'

// function MethodsAsPropsChild(props) {
//     return (
//         <div>
//             <button onClick={props.greetHandler}>Greet Parent</button>
//         </div>
//     )
// }

function MethodsAsPropsChild(props) {
    return (
        <div>
            <button onClick={()=> props.greetHandler('Child')}>Greet parent with random string</button>            
        </div>
    )
}

export default MethodsAsPropsChild
