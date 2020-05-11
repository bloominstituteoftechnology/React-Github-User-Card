import React, { useState } from 'react';


const Followers = ({ followers, following }) => {
    const [followView, setFollowView] = useState("followers")
    console.log(following)

    const follow = (followArr) => {
        return (
            <div className="follow-grid">
                {followArr.map((follower,id) => (
                    <a key={id} href={follower.html_url}>
                    <div className="follow-card">
                        <div className="follow-img">
                            <img src={follower.avatar_url} alt={follower.login}></img>
                        </div>
                        <div className="follow-name">{follower.login} </div>
                    </div></a>
                ))}
            </div>
        )
    }

    return (
        <div>
        <p>Following/Followers</p>
        {follow(followers)}
        </div>
        

    )
};

export default Followers;