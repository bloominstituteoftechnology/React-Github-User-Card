import React from 'react';

function Followers(props){
    console.log('here is the props', props)
    return(
        <div>
            {props.followers.map(followers => (
                <div key={followers.id} className='follower'>
                    <img src={followers.avatar_url} alt={followers.login}/>
                    <div>
                        <h3>{followers.login}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Followers;