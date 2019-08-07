import React from 'react';
import FollowersCard from './FollowersCard';

const UserCard = props => {
    return (
        <div>
            <img key={props.user.id} src={props.user.avatar_url} alt={props.user.name} />
            <div className='cardInfo'>
                <h3>{props.user.name}</h3>
                <h4>{props.user.login}</h4>
                <p>Location: {props.user.location}</p>
                <p>Profile: {props.user.html_url}</p>
                <p> Bio: {props.user.bio}</p>
            </div>
            <div className="cardFooter">
                <p>Followers: {props.user.followers}</p>
                <p>Following: {props.user.following}</p>
            </div>

            <FollowersCard />
        </div>
    )
};

export default UserCard;