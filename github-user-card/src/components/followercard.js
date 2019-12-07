import React from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';





const FollowerCard = props => {
  console.log('props followercard: ', props);
  // console.log('users: ', props.users);
  // console.log('followers: ', props.followers);
  // console.log('profile pic: ',props.users.data.avatar_url)


  return(
    <div>
      <Card>
        <CardImg top width="100%" src={props.profile} alt={props.login} />
        <CardBody>
          <CardTitle>{props.login}</CardTitle>
          <CardSubtitle>{props.name}</CardSubtitle>
          <CardText>Repos: {props.repos}</CardText>
          <CardText>Followers: {props.follow}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default FollowerCard;
