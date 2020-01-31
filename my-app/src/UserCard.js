import React from 'react';


function UserCard(props){
    console.log(props)
    return (
        <div className='main-container'>
            <div key={props.id} className="my-info">
                <h1>{props.name}</h1>
                <img src={props.avatar} alt="profile" />
                <p>Username: {props.login}</p>
                <p>Location: {props.location}</p>
                <a href={props.html}><p>Website: {props.html}</p></a>
                <a href={props.blog}><p>Blog: {props.blog}</p></a>
            </div>
            <div className='user-info'></div>
        </div>
    )
}

export default UserCard;