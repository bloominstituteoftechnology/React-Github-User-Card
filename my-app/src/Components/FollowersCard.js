import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const FollowersCard = props => {
  console.log("follow props", props);

  return (
    <Card>
      <Image src={props.photo} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.link}</Card.Meta>
        <Card.Description>This is the users hard-coded bio</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default FollowersCard;
