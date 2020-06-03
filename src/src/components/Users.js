import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {/* //looping through each individual user in state and passing in as prop to UserItem */}
        {this.props.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 2fr)',
  gridGap: '1rem'

}

export default Users
