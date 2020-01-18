import React from "react";

const FollowerCard = props => {
    return (
        <div className="follower-cards">
            <img src={props.imgFollow} alt="{props.login" width="40%" />
            <p>
                <a href="{props.urlFollow}">{props.loginFollow}</a>
            </p>
            <p>Total Repos: {props.reposFollow}</p>
            <p>Location: {props.locationFollow}</p>
            <p> Following: {props.urlFollowing}</p>
        </div>
    )
}

export default FollowerCard;