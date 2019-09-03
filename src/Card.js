import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = (props) => (
  <Card>
    <Image src={props.user.avatar_url} wrapped ui={false} />
    {console.log(props)}
    <Card.Content>
      <Card.Header>{props.user.login}</Card.Header>
      <Card.Header>{props.user.name}</Card.Header>
    </Card.Content>
  </Card>
)

export default CardExampleCard