import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
<<<<<<< HEAD
const githubContext = useContext(GithubContext);

const { loading, users } = githubContext;

if (loading) {
    return <Spinner />;
} else {
    return (
    <div style={userStyle}>
        {users.map(user => (
        <UserItem key={user.id} user={user} />
        ))}
    </div>
    );
}
};

const userStyle = {
display: 'grid',
gridTemplateColumns: 'repeat(3, 1fr)',
gridGap: '1rem'
=======
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
>>>>>>> ff05c00adb6749a8c38f91ea720c239e6ebc17b9
};

export default Users;