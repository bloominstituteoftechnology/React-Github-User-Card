import React from 'react'
import Card from 'react-bootstrap/Card'
import { Col } from 'react-bootstrap'

const UserCard = props => {
  return (
    <Card id='user-card'>
      <Card.Img
        src={props.user.avatar_url}
        alt='avatar-image'
        className='user-image'
      />
      <Card.ImgOverlay>
        <Card.Body>
          <Col className='content-block-1'>
            <h1>GitHub Profile:</h1>
            <a href='https://github.com/hutchcrowley'>
              <h4>{props.user.login}</h4>
            </a>
          </Col>
          <Col xs={4} className='content-block-2'>
            <h2>Location:</h2>
            <p>{props.user.location}</p>
            <h2>Bio: </h2>
            <p>{props.user.bio}</p>
            <h2>Blog:</h2>
            <a href={props.user.blog}>
              <h4>{props.user.blog}</h4>
            </a>
            <div className='counters'>
              <h3>Gists: </h3>
              <p>{props.user.public_gists}</p>
              <h3>Repos:</h3>
              <p>{props.user.public_repos}</p>
            </div>
          </Col>
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  )
}

export default UserCard
