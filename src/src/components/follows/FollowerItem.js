import React from 'react'

const FollowerItem = ({ follow }) => {
  return (
    <div className='card'>
      <h3> 
        <a href={follow.html_url}> {follow.name} </a>  
      </h3>
    </div>
  )
}

export default FollowerItem
