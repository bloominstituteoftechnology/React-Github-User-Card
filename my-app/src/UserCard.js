import React from 'react';

function UserCard(props){
    console.log(props)
    return (
        <div className='main-container'>
            <div key={props.id} className="my-info">
                <h1>{props.name}</h1>
                <img src={props.avatar} />
                <p>Username: {props.login}</p>
                <p>Location: {props.location}</p>
                <p>Website: {props.html}</p>
                <p>Blog: {props.blog}</p>
            </div>
            <div className='user-info'></div>
        </div>
    )
}

export default UserCard;