import React from 'react';

const UserDetail = props =>{
    console.log(props);
    return(
        <div>
            { <img src={props.data.avatar_url} alt='User Picture'/> }
            <div>
                <h3>Name : {props.data.name}</h3>
                 <p>Username : {props.data.login}</p>
                 <p>Address : {props.data.location}</p>
                 <p>Followers : {props.data.followers}</p>  
                 <p>Following : {props.data.following}</p>
                 <p>Message : {props.data.bio}</p> 
            </div>                          
        </div>
    )
}
export default UserDetail;