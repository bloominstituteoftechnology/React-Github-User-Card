import React from "react";

const FollowerCard = props => {
    return (
        <div className="follower-cards">
            <img src={props.imgFollow} alt="{props.login" width="40%" />
            <p>
                <a href="{props.urlFollow}">{props.loginFollow}</a>
            </p>

        </div>
    )
}

export default FollowerCard;