import React from 'react';
import { Card, Container } from 'semantic-ui-react'

const UserCard = props => {

  const extra = (
    <div>
        <a href={props.user.email} />
        <a href={props.user.html_url} />
    </div>
  )

  return (
    <Container>
        <Card className='userCard'
            header={props.user.name}
            image={props.user.avatar_url}
            alt={props.user.name}
            meta={props.user.location}
            extra={extra}
        />
    </Container>
    
  )
}

export default UserCard;
