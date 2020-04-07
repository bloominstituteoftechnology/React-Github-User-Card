import React from 'react'


export default class Followercard extends React.Component
{


  render()
  {

    return (
      <div class="card followercard">
        <img src={this.props.userData.avatar_url} alt="" />
        <div className="card-info">
          <h3>{this.props.userData.login}</h3>
          <p>Profile:<a href={this.props.userData.html_url}> {this.props.userData.html_url}</a></p>
          <p>Type: {this.props.userData.type}</p>
        </div>
      </div>
    )
  }
}

