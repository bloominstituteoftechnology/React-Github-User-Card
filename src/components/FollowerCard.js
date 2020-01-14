import React from "react";
import { StyledDiv, StyledContain } from "../styles/StyledFollowerCard";


const FollowerCard = props => {
  console.log(`this is props in FollowerCard`, props);
  return (
    <StyledContain>
      {props.data.followers.map(follower => (
        <StyledDiv>
          <img src={`${follower.avatar_url}`}></img>
          <h2>{follower.login}</h2>
          <p>{follower.url}</p>
        </StyledDiv>
      ))}
    </StyledContain>
  );
};

export default FollowerCard;
