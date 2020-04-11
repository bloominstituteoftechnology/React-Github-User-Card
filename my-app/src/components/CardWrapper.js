import React from "react";
import {
  Card,
  Icon,
  Image,
  Container,
  CardContent,
  CardDescription
} from "semantic-ui-react";

//components
import UserSearch from "./UserSearch";
import Followers from "./Followers";

const CardWrapper = props => {
  return (
    <Container>
      <UserSearch searchUser={props.searchUser} error={props.error} />
      <Card>
        <Image src={props.userData.data.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.userData.data.name}</Card.Header>
          <Card.Meta>
            <span className="date">
              Location: {props.userData.data.location}{" "}
            </span>
          </Card.Meta>
          <Card.Description>{props.userData.data.bio}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a target="blank" href={props.userData.data.html_url}>
            <Icon name="github" />
            Repositories: {props.userData.data.public_repos}
          </a>
        </Card.Content>
        <CardContent>
          <CardDescription>
            Followers:
            <Card.Meta>
              <span className="date">
                <Icon name="github alternate" />
                {props.followers.map(friend => {
                  return (
                    <Followers friend={props.followers} key={Math.random()} />
                  );
                })}
              </span>
            </Card.Meta>
          </CardDescription>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CardWrapper;
