import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const FollowersCard = (props) => (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={props.users.avatar_url}
        />
        <Card.Header>{props.users.login}</Card.Header>
        <Card.Meta>{props.users.type}</Card.Meta>
        <Card.Description>
          Click <strong>below</strong> to view user's pages
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='blue'>
            <a href={props.users.html_url}>Github</a>
          </Button>
        </div>
      </Card.Content>
    </Card>
)

export default FollowersCard;