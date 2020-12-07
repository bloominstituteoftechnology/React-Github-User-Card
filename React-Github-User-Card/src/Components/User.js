import React from 'react';
import Followers from './Followers';

export default function User (props) {
    let {
        avatar_url,
        name,
        username,
        location,
        html_url,
        followers,
        following,
        bio,
    } = props.user;

    return (
        <div className="user-card">
            <div className="individual-user" >
                <img src={avatar_url} alt="portrait" />
                <div className="individual-info">
                    <h3>{name}</h3>
                    <p>{username}</p>
                    <p>{location}</p>
                    <p>{bio}</p>
                    <p>
                        <a href={html_url}>GitHub Profile</a>
                    </p>
                    <p>Following: {following}</p>
                    <p>Followers: {followers}</p>
                    <div className="followers">
                        {props.followers.map((follower, index) => {
                        return <Followers follower={follower} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}