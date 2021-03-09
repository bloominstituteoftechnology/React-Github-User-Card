import React from 'react';
import './App.css';
import User from './User';

const UserList = (props) => {
  return (
    <div className='cards'>
      {props.users.map((item) => (
        <User
        key={item.id}
        user={item.user}
        />
      ))}

    </div>
  )
}

export default UserList;