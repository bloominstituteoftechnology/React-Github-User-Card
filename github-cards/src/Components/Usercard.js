import React from 'react'


export default class Usercard extends React.Component
{


  render()
  {
    // console.log("This props", this.props)


    return (
      <div class="card usercard">
        <img src={this.props.userData.avatar_url} alt="" />
        <div className="card-info">
          <h3>{this.props.userData.login}</h3>
          <p>Location: {this.props.userData.location}</p>
          <p>Profile:<a href={this.props.userData.html_url}> {this.props.userData.html_url}</a></p>
          <p>follower count: {this.props.userData.followers}</p>
          {this.props.followers.map(item =>
            <a href={item.html_url}>{item.login}, </a>
          )}
          <p>following: {this.props.userData.following}</p>
          <p>bio: {this.props.userData.bio}</p>
          <p>User Since: {this.props.userData.created_at}</p>
        </div>
      </div>
    )
  }
}

