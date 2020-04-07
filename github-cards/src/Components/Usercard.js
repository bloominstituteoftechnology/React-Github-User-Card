import React from 'react'


export default class Usercard extends React.Component
{


  render()
  {
    console.log("This props", this.props)

    
    return (
      <div class="usercard">
        <img src={this.props.userData.avatar_url} alt=""/>
        <p>Login: {this.props.userData.login}</p>
        <p>Location: {this.props.userData.location}</p>
        <p>url: {this.props.userData.html_url}</p>
        <p>follower count: {this.props.userData.followers}</p>
        {this.props.followers.map(item=>
        <p>{item.login}</p>
          )}
        <p>following: {this.props.userData.following}</p>
        <p>bio: {this.props.userData.bio}</p>
        <p>User Since: {this.props.userData.created_at}</p>
      </div>
    )
  }
}

