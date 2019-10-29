import React from 'react';

const Card = props => {
    let follower = props.followers;
    return(
        <div className="card">
            {console.log('card', props.followers)}
            <h2>{follower.login}</h2>
            <img src={follower.avatar_url}/>      
        </div>
    )
}

export default Card;