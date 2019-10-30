import React from 'react'

function UserCard(props){
    return(
        // <div>
        //     {props.user.map(person=>(
        //         <div key={person.id}>
        //             <img src={person.avatar_url} alt={person.name}/>
        //             <div>
        //                 <h2>{person.name}</h2>
        //                 <div>
        //                     <h3>Followers: {person.followers}</h3>
        //                     <h3>Following: {person.following}</h3>
        //                 </div>
        //                 <p>Bio: {person.bio}</p>
        //             </div>
        //         </div>
        //     ))}
        // </div>
        <div>
            <img src={props.user.avatar_url} alt={props.user.name}/>
            <div>
                <h2>{props.user.name}</h2>
                <div>
                    <h3>Followers: {props.user.follwers}</h3>
                    <h3>Following: {props.user.following}</h3>
                </div>
                <p>Bio: {props.user.bio}</p>
            </div>
        </div>
    )
}

export default UserCard