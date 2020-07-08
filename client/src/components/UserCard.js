import React from 'react';

const UserItem = ({user: { login, avatar_url }}) => {
  
    return (
      <div className='card text-center'>
        <img 
          src={avatar_url} 
          alt='' 
          className='round-img' 
          style= {{ width: '60px', border: '1px solid black'}} 
          />
            <h3> {login} </h3>
              <a href={`/user/${login}`} className='btn btn-dark btn-sm my-1'> 
                More...
              </a> 
             
      </div>
    )
  
}

export default UserItem
