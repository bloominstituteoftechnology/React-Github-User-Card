import React from "react";
import Followers from './Followers';

class UserCard extends React.Component {

  render() {
    return (
      <>
        <div className="userCard">
          <img
            src={this.props.user.avatar_url}
            alt={this.props.user.name}
            width="200"
          />
          <div className="userInfo">
            <h3>Name: {this.props.user.name}</h3>
         <p>Username: <a href={this.props.user.html_url}>
                {this.props.user.login}</a></p>
            <p>Public Repos: {this.props.user.public_repos}</p>
            <p>Followers: {this.props.user.followers}</p>
            {
                this.props.followers.map(follower => (
                    <Followers key={follower.id} login={follower.login} pic={follower.avatar_url}/>
                ))
            }
          </div>
        </div>
      </>
    );
  }
}

export default UserCard;
