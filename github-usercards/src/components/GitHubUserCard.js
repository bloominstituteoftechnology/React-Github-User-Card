import React from "react";
import { Card, Icon } from "semantic-ui-react";

const GitHubUserCard = ({ followers, user }) => {
  console.log(followers);
  const userExtra = (
    <p>
      <Icon name="user" />
      {user.followers} Followers
    </p>
  );
  return (
    <Card.Group centered style={{ marginTop: "20px" }}>
      <Card
        image={user.avatar_url}
        header={user.login}
        meta="User"
        description={user.bio}
        extra={userExtra}
      />
      {followers.map((follower, i) => {
        const extra = (
          <p>
            <Icon name="user" />
            {follower.followers} Followers
          </p>
        );
        return (
          <Card
            key={follower.url}
            image={follower.avatar_url}
            header={follower.login}
            meta="Follower"
            description={follower.bio}
            extra={extra}
          />
        );
      })}
    </Card.Group>
  );
};

export default GitHubUserCard;
