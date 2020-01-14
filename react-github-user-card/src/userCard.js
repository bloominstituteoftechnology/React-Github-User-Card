import React from 'react';

const UserCard =(props)=>{
    console.log(props)
    return(
        <div key={props.id}>
            <h3>{props.name}</h3>
            <h3>{props.login}</h3>
            <p>{props.email}</p>
            <img src={props.avatar} alt={props.name}/>
        </div>
    );
}
export default UserCard;