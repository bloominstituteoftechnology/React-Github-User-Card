import React from "react";
import { Card, Icon, Image, Grid, List } from "semantic-ui-react";
import FollowersCard from "./FollowersCard";

const UserGrid = props => {
  console.log("usergrid props", props);

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
        <List bulleted>
          <h1>Followers</h1>
          {props.followers.map(follower => (
            <List.Item
              key={follower.id}
              target="_blank"
              href={`http://www.github.com/${follower.login}`}
            >
              <br></br>
              {follower.login}
            </List.Item>
          ))}
        </List>
      </Grid.Column>
    </Grid>
  );
};

export default UserGrid;
