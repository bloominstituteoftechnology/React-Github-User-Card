import React from "react";
import axios from "axios";
import { useState } from "react";

import "./card.css";

function FollowerCard(props) {
  const [follower, setFollower] = useState([]);

  const handleFollower = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/brianaabreu/followers`)
      .then((res) => {
        setFollower(res.data);
        console.log("Followers ", follower);
      })

      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="followers-container">
      <button className="" onClick={handleFollower}>
        Followers
      </button>
      <div className="followers">
        {console.log("followers return", follower)}
        {follower.map((item) => (
          <div className="card">
            <img className="img" src={item.avatar_url} alt="user avatar" />
            <h4>{item.login}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowerCard;
