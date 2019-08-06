import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = (props) => {

  console.log('usercard props', props.user);

  return(
    <Card>
      <Card.Header>{props.user.name}</Card.Header>
    </Card>
    )
  }

export default UserCard
