import React from 'react'
import Card from 'react-bootstrap/Card'
import { Col } from 'react-bootstrap'

const UserCard = props => {
  console.log(props)
  return (
    <Card className='bg-dark' id='user-card'>
      <div>
        <Card.Img
          src={props.user.avatar_url}
          alt='avatar-image'
          className='user-image'
        />
        <Card.ImgOverlay>
          <Card.Body>
            <Card.Text>
              <Col xs={6} className='content-block-1'>
                <h2>GitHub Profile:</h2>
                <a href='https://github.com/hutchcrowley'>
                  <h5>{props.user.login}</h5>
                </a>
              </Col>
              <Col xs={4} className='content-block-2'>
                <h2>Location:</h2>
                <p>{props.user.location}</p>
                <h2>Bio: </h2>
                <p>{props.user.bio}</p>
                <div className='counters'>
                  <h3>Gists: </h3>
                  <p>{props.user.public_gists}</p>
                  <h3>Repos:</h3>
                  <p>{props.user.public_repos}</p>
                </div>
                <h4>Blog:</h4>
                <p>
                  <a href={props.user.blog}>{props.user.blog}</a>
                </p>
              </Col>
            </Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </div>
    </Card>
  )
}

export default UserCard
