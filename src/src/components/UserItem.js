//UserItem will be passed in as props
import React from 'react';
import { Link } from 'react-router-dom';
//if not using class, do not use 'this' keyword
//everything will be passed in as props
//or completely destructure user: {what you pull out from it}
const UserItem = ({user: { login, avatar_url, html_url, name, location, followers, following, bio }}) => {
  
    return (
      <div className='card text-center'>
        <img 
          src={avatar_url} 
          alt='' 
          className='round-img' 
          style= {{ width: '60px', border: '1px solid black'}} 
          />
          <div className='card-info'></div>
            <h3> {name} </h3>
            <p> {login} </p>
            <p> Location:&nbsp; {location} </p>
            <p> Profile: &nbsp;
              <Link to={`/user/${login}`}> 
                {html_url}
              </Link> 
            </p>
            <p> Followers:&nbsp; {followers} </p>
            <p> Following:&nbsp; {following} </p>
            <p> Bio:&nbsp; {bio} </p>   
      </div>
    )
  
}

export default UserItem
