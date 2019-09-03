import React from 'react'

// class Card extends React.Component{
//     constructor(props){
//     super(props)
//     console.log('props', props)
//     }

//     render(){
//     // console.log('this props', this.props)
//         return(
//             <h1>HELLO WORLD</h1>
//         )
//     }
// }

// export default Card;


function Card(props){
    console.log('props', props)
    return(
        <div>
             {props.users.name}
        </div>
    )
}

export default Card;
