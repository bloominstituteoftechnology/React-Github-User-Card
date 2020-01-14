import React from 'react';

function UserCard(props){
    console.log(props)
    return (
        <div key={props.id}>
            <h1>{props.name}</h1>
            <img src={props.avatar} />
            <p>Username: {props.login}</p>
            <p>Email: {props.email}</p>
            <p>Website: {props.html}</p>
            <p>Blog: {props.blog}</p>
        </div>
    )
}

export default UserCard;