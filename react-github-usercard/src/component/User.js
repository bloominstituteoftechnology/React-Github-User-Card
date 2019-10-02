import React from "react";

 class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      console.log("props from app", this.props.user)
    return (<div className="user">
        <img className="image" src={this.props.user.avatar_url}></img>
        <p>Name: {this.props.user.name}</p>
        <p>Bio: {this.props.user.bio}</p>
        <p>Location: {this.props.user.location}</p>
        </div>)
  }
}

export default User;