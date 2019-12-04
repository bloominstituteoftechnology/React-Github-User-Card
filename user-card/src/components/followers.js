import React from 'react'

const Followers = props => {
    return (
    <div className='card'>
    <img src={props.img} />
    <div>
        <p>{props.name}</p>
    </div>
  </div>
)
}

export default Followers