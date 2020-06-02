import React, { Component } from 'react'

class UserItem extends Component {

  state = {
    name: 'Name here',
    login: 'login name here',
    id: 'id',
    avatar_url: 'avatarUrl here',   
  }

  render() {
    return (
      <div>
        <h3>User item</h3>
      </div>
    )
  }
}

export default UserItem
