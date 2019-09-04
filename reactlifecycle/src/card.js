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
             <h1> {props.users.name} </h1>
             <img src={props.users.avatar_url}></img>
             <p>Followers: {props.users.followers}</p>
             </div>
             
            //  {/* <div>
            //     {props.followers.map(follower => 
            //         <h3 key={follower.id}> {follower.login} </h3>,
            //         // <img key={follower.id} src={follower.avatar_url}></img>
                
            //     // )}
            //     //     {props.followers.map(follower => 
            //     //     <img key={follower.id} src={follower.avatar_url}></img>                
            //     // )}

            //  {/* why is this in brackets */}
            //  </div> */}
        
    )
}

export default Card;
