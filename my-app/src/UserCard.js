import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import FollowersCard from "./FollowersCard";

const UserCard = props => {
  return (
    <Card>
      <Image src={props.user.avatar_url} />
      <Card.Content>
        <Card.Header>{props.user.name}</Card.Header>
        <Card.Meta>{props.user.location}</Card.Meta>
        <Card.Description>{props.user.bio}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        {props.user.followers} Followers
      </Card.Content>
    </Card>
  );
};

export default UserCard;
