import React from 'react';
import GitHubCalendar from './GitHubCalendar';

export default props => {
    return (
        <div className='card'>
            <img src={props.data.image} alt={props.data.name + "'s avatar image."} />
            <div className='card-ifo'>
            <h3 className='name'>{props.data.name}</h3>
    <p className='username'>{props.data.username}</p>
    <p>{props.data.location}</p>
    <p>Profile: <a href={props.data.profilePage}>{props.data.username}</a></p>
    <p>followers: {props.data.followers}</p>
                <p>following: {props.data.following}</p>
                <p>Bio: {props.data.bio}</p>
            </div>
            <GitHubCalendar username={props.data.username}/>
            </div>
       
    )
}