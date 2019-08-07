import React from 'react';
import FollowersCard from './FollowersCard';

const UserCard = props => {
    return (
        <div className='container'>
            <div className="user-card">
                <div className="user-imgContainer">
                    <img key={props.user.id} src={props.user.avatar_url} alt={props.user.name} className="userImage" />
                </div>
                <div className='userInfo'>
                    <h3>{props.user.name}</h3>
                    <p className="user-login">{props.user.login}</p>
                    <div className="user-description">
                        <p>Location: {props.user.location}</p>
                        <p>
                            Profile: <a href={props.user.html_url}> {props.user.html_url}</a>
                        </p>
                    </div>


                    <p> Bio: {props.user.bio}</p>
                </div>
                <div className="userFooter">
                    <p>Followers: {props.user.followers}</p>
                    <p>Following: {props.user.following}</p>
                </div>
            </div>
            <h2>{props.user.name}'s followers:</h2>
            <FollowersCard />
        </div>
    )
};

export default UserCard;