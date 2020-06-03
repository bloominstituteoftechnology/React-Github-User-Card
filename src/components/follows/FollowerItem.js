import React from 'react'

const FollowerItem = ({ follow }) => {
  console.log(follow)
  return (
    <div className='card all-center'>
      <img src={follow.avatar_url} alt='avatar' className='round-img' style= {{ width: '50px' }} />
      <h3> 
        <a href={follow.html_url}> {follow.login} </a>  
      </h3>
      
    </div>
  )
}

export default FollowerItem
