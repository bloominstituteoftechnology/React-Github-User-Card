import React from 'react';
import avatar from "../placeholder avatar.png";

const UserCard = (props) => {
    console.log("These are props", props)
        return (
            <div className="userCard">
                <div className="userCard__image">
                    <img src={props.user.avatar_url || avatar} alt="User Image"/>
                    <div className="userCard__image__count">
                    <p>Followers: {<span className="count">{props.user.followers}</span>}</p>
                    <p>Following: {<span className="count">{props.user.following}</span>}</p>
                    </div>
                </div> 
                <div className="userCard__info">
                    <h2>{props.user.name || "A person has no name"}</h2>
                    <h3>{props.user.location || "Location Unknown"}</h3>
                    <p>{props.user.bio || "This is the sad story of a person with no Bio. Destined to be forgotten. Washed away by the sands of time..."}</p>
                    <a href={props.user.html_url} target="blank">
                        <button className="userCard__visit">View Profile</button>
                    </a>
                </div>
            </div>
        )
    }

export default UserCard
