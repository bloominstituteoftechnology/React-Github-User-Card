import React, {Component} from 'react'
import {Card, CardBody, CardHeader, CardImg} from 'shards-react'
import UserCardFooter from './UserCardFooter'

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: []
    }
  }

  componentDidUpdate () {
    fetch(this.props.user.followers_url)
        .then(res => res.json())
        .then(followers => this.setState({followers: followers}))
        .catch(err => console.error(err));
  }

  render() {
    return (
        <Card>
          <CardHeader>{this.props.user.name}</CardHeader>
          <CardImg src={this.props.user.avatar_url}/>
          <CardBody>{this.props.user.bio}</CardBody>
          <UserCardFooter followers={this.state.followers}/>

        </Card>
    )
  }
}

export default UserCard
