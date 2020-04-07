import React from 'react'


export default class Followercard extends React.Component
{


  render()
  {

    return (
      <div class="followercard">
        <img src={this.props.userData.avatar_url} alt=""/>
        <p>Login: {this.props.userData.login}</p>
        <a href={this.props.userData.html_url}>url: {this.props.userData.html_url}</a>
        <p>Type: {this.props.userData.type}</p>
      </div>
    )
  }
}

