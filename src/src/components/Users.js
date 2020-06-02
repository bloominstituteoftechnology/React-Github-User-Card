import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  //set state hold arrays for users
  state={
   users: [
    {
    name: 'A',
    id: '1',
    login: 'charisearter',
    avatar_url: 'https://avatars1.githubusercontent.com/u/58978773?v=4',
    location:'location',
    followers: 'how many followers',
    following: 'how many following',
    bio: ' whatever is in the bio',
    html_url: 'https://github.com/charisearter'
  },
  {
    name: 'B',
    id: '2',
  login: 'B',
  avatar_url: 'https://avatars2.githubusercontent.com/u/13751827?v=4',
  location:'location 2',
  followers: 'how many followers',
  following: 'how many following',
  bio: ' whatever is in the bio',
  html_url: 'https://github.com/hoey1'
},
{
  name: 'C',
  id: '3',
login: 'C',
avatar_url: 'https://avatars3.githubusercontent.com/u/5785230?v=4',
location:'location 3',
followers: 'how many followers',
following: 'how many following',
bio: ' whatever is in the bio',
html_url: 'https://github.com/yadig'
},
   ]
  }
  render() {
   
    return (
      <div style={userStyle}>
        {/* //looping through each individual user in state and passing in as prop to UserItem */}
        {this.state.users.map(user => (
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
