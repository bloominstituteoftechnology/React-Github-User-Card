import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap'

class FollowersCard extends Component {
  render() {
    return (
      this.props.followers.map(follower => {
        return (
          <Card key={follower.id} className=''>
            <CardImg src={follower.avatar_url} alt='Follower' />
            <CardBody>
              <CardTitle>{follower.login}</CardTitle>
              <Button onClick={e => window.open(follower.html_url)}>Go to User git?</Button>
            </CardBody>
          </Card>
        )
      })
    )
  }
}

export default FollowersCard