import React from 'react';
import { Card, Container, Image, Icon } from 'semantic-ui-react';

const UserCard = (props) => {
  return (
    <div>
      <Container>
        <Card fluid>
          <Card.Content>
            <Card.Header>{props.userData.name}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Image size="medium" src={props.userData.avatar_url} />
            <Card.Header className="header"><Icon name="github" /> {props.userData.login}</Card.Header>
            <Card.Meta><Icon name="home" /> {props.userData.location}</Card.Meta>
            <Card.Description>{props.userData.bio}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name='group' />{props.userData.followers} Followers
        </Card.Content>
        </Card>
      </Container>
    </div>
  )
}

export default UserCard;