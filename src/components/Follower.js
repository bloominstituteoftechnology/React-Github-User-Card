import React from 'react'
import Card from 'react-bootstrap/Card'

const Follower = props => {
  return (
    <>
      <Card className='bg-secondary' id='follower-card'>
        <Card.Img
          variant='bottom'
          src={props.picture}
          className='follower-image'
        />
        <Card.ImgOverlay>
          <div className='handle'>
            <h4>GitHub User Name:</h4>
            <p>{props.handle}</p>
          </div>
          <div className='profile'>
            <h4>Profile:</h4>
            <a href={props.profile}>
              <h5>{props.profile}</h5>
            </a>
          </div>
        </Card.ImgOverlay>
      </Card>
    </>
  )
}

export default Follower
