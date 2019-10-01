import React, { useState, initialState } from "react";
import { Card, Icon, Image, Grid, List } from "semantic-ui-react";
import FollowersCard from "./FollowersCard";

const UserGrid = props => {
  console.log("usergrid props", props);

  const [follower, setFollower] = useState(initialState);
  return (
    <Grid>
      <Grid.Column width={4}>
        <Image width="500px" src={props.user.avatar_url} />
      </Grid.Column>
      <Grid.Column width={9}>
        <h1>{props.user.name}</h1>
        <h3>{props.user.location}</h3>
        <a href={`http://www.github.com/${props.user.login}`} target="_blank">
          {props.user.login}
        </a>
        <p>{props.user.bio}</p>
      </Grid.Column>
      <Grid.Column width={3}>
        <h1>Follower</h1>
        <List.Item
          key={follower.id}
          target="_blank"
          href={`http://www.github.com/${follower.login}`}
        >
          <br></br>
          {follower.login}
        </List.Item>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default UserGrid;
