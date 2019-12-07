import React from 'react';

import {Container, Row, Col} from 'reactstrap';





const UserCard = props => {
  console.log('props: ', props);
  console.log('users: ', props.users);
  console.log('followers: ', props.followers);
  console.log('profile pic: ',props.users.data.avatar_url)


  return(
    <Container className='user-container'>
      <Row>
        <Col>
         <img src={props.users.data.avatar_url} alt={props.users.data.login} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>{props.users.data.login}</h2>
          <h3>{props.users.data.name}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Repos worked on: {props.users.data.public_repos}</h4>
          <h4>Following: {props.users.data.following}</h4>
          <h4>Followers: {props.users.data.followers}</h4>
        </Col>
      </Row>
    </Container>
  )
}

export default UserCard;
