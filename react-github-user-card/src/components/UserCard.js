import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

class UserCard extends Component {
  render() {
    return (
      <Card className='user-card-col'>
        <CardImg top src={this.props.main.avatar_url} alt='User' />
        <CardBody>
          <CardTitle>{this.props.main.name}</CardTitle>
          <CardSubtitle>{this.props.main.login}</CardSubtitle>
          <CardText>
            Public Repos: {this.props.main.public_repos}<br />
                        Location: {this.props.main.location}<br />
            {this.props.main.followers} Followers<br />
                        Following {this.props.main.following} people<br />
          </CardText>
          <Button onClick={e => window.open(this.props.main.html_url)} className='btn-link'>Go To User Page</Button>
        </CardBody>
      </Card>
    )
  }
}

export default UserCard;
