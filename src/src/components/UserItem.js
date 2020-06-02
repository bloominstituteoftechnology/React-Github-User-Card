//UserItem will be passed in as props
import React from 'react'
//if not using class, do not use 'this' keyword
//everything will be passed in as props
//or completely destructure user: {what you pull out from it}
const UserItem = ({user: { login, avatar_url, html_url, name, location, followers, following, bio }}) => {
  
    //const { login, avatar_url, html_url, name } = props.user;
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
              <a href={html_url}> 
                {html_url}
              </a> 
            </p>
            <p> Followers:&nbsp; {followers} </p>
            <p> Following:&nbsp; {following} </p>
            <p> Bio:&nbsp; {bio} </p>   
      </div>
    )
  
}

export default UserItem
