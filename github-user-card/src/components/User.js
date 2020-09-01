import React from 'react';
import UsersCard from './UsersCard';

const User = props => {
  return (
    <div>
      {props.user.map((user) => {
        return <UsersCard key={user.id} user={user} />;
      })}
    </div>
  );
};
export default User;