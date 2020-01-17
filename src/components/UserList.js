import React from "react";
import UserCard from "./UserCard.js";

class UserList extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <div className="user-list">
        {this.props.followers.map(follower => {
          return <UserCard key={follower.id} follower={follower} />;
        })}
      </div>
    );
  }
}

export default UserList;
