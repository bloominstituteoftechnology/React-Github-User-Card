import React from 'react';

import {Container, Row, Col} from 'reactstrap';

import FollowerCard from './followercard.js';




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
      <Row>
        <Col>
          <h2>Followers</h2>
        </Col>
      </Row>
      <Row>
        {props.followers.data.map(follower =>{
          return (<FollowerCard
                    key={follower.id}
                    profile={follower.avatar_url}
                    login={follower.login}
                    name={follower.name}
                    repo={follower.public_repos}
                    follow={follower.followers}

                  />);
        })}
      </Row>
    </Container>
  )
}

export default UserCard;
