import React from 'react'

// not a proper solution
// function ListRendering() {
    // const nameArray = ['Max', 'Danny', 'Tom']
//     return (
//         <div>
//             <h2>{nameArray[0]}</h2>
//             <h2>{nameArray[1]}</h2>
//             <h2>{nameArray[2]}</h2>
//         </div>
//     )
// }

// map method
function ListRendering() {
    const nameArray = ['Max', 'Danny', 'Tom']
    return (
        <div>
            {
              nameArray.map(name => <h2>{name}</h2>)  
            }            
        </div>
    )
}


export default ListRendering
