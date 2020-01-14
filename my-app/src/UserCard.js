import React from 'react';

function UserCard(props){
    console.log(props)
    return (
        <div className='main-container'>
            <div key={props.id} className="my-info">
                <h2>{props.name}</h2>
                <img src={props.avatar} />
                <p>Username: {props.login}</p>
                <p>Email: {props.email}</p>
                <p>Website: {props.html}</p>
                <p>Blog: {props.blog}</p>
            </div>
            <div className='user-info'></div>
        </div>
    )
}

export default UserCard;