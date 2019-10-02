import React from 'react';



const UserList = props => {
  console.log('UserList', props);
  return (
    <div>
      <div>
        {props.followers.map((follower, id) => (
          <div key={id}>
            <div>
              <img src={props.user.avatar_url} />
              <h3>User Login: {follower.login}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;


 