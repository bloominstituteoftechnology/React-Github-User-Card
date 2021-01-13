import React from 'react'

export default function UserCard (props) {
    // if (!props) {
    //     console.log('Loading...')
    //     return <h1>Loading...</h1>
    // }    
    
    return (
            <div>
                <img src={props.myCard.avatar_url} alt='blah'/>
                <h1>{props.myCard.name}</h1>
                <h2>Followers: {props.myCard.followers}</h2>
                <h2>Following: {props.myCard.following}</h2>
                <a href={props.myCard.html_url}>Link to my Github</a>
            </div>
        )

}