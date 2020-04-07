import React, { useState, useEffect } from "react";
import axios from "axios";

const FollowerCard = ({ followerLogin }) => {
  const [followerData, setFollowerData] = useState({});

  useEffect(() => {
    if (followerLogin) {
      console.log(followerLogin);
      axios.get(`https://api.github.com/users/${followerLogin}`).then((res) => {
        let response = res.data;
        setFollowerData({ ...followerData, response });
        console.log(followerData);
      });
    }
  }, [followerLogin]);
  return (
    <div className="card">
      <div className="img-data">
        <div className="background-img">
          <img src={followerData.avatar_url} alt="follower avatar" />
        </div>
      </div>
      <div className="follower-info">
        <h1 className="title">{followerData.name}</h1>
        <h2 className="subtitle">{followerData.login}</h2>
      </div>
    </div>
  );
};
export default FollowerCard;
