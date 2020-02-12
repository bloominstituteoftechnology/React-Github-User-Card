import React from 'react';

const MyProfile = (props) => {

    return(
        <div style={{borderRadius: '20px', border: '1px solid black', padding: '5px', width: '400px', display: 'inline-block', boxShadow: '5px 10px'}}>
   
        {console.log('inside the Profile return -->', props.users.login)}
        <h2>{props.users.login}</h2>
        <img src={props.users.avatar_url} style={{borderRadius: '50%', width: '25%'}}/>
        <p>{props.users.bio}</p>
        <p> Followers: {props.users.followers}</p>

        </div>
    )
}

export default MyProfile