import React from "react";
import {NavLink} from "react-router-dom";

 class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      console.log("props from app", this.props.user)
    return (<div className="user">
        <img className="user-image" src={this.props.user.avatar_url}></img>
        <p>Name: {this.props.user.name}</p>
        <p>Bio: {this.props.user.bio}</p>
        <p>Location: {this.props.user.location}</p>
        <NavLink className="see-followers" to="/followers">See my followers</NavLink>
        </div>)
  }
}

export default User;