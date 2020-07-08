import React, { Component } from 'react';
import UserCard from './UserCard';
import Spinner from './Spinner';

class Users extends Component {
  state ={
    loading: false,
  }
  render() {
    if(this.state.loading) {
        return <Spinner />
    }else {
    return (
      <div >
        {this.props.users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    )
  }
}
}



export default Users
