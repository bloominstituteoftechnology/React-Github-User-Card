import React from 'react';
import styled from 'styled-components';

const List=styled.div`
  display:flex;
  height:350px;
  width:100%;
  font-family:sans-serif;
  color:purple;
  padding-left:250px;

`

const Image=styled.img`
  height:125px;
  width:125px;
`

const Card=styled.div`
  width:250px;
  height:400px;
  display:flex;
  display:inline-block;
`


const UserList = props => {
  console.log('UserList', props);
  return (
    <div>
      <List>
        {props.followers.map((follower, id) => (
          <div key={id}>
            <Card>
              <Image src={follower.avatar_url} />
              <h3>User Login: {follower.login}</h3>
            </Card>
          </div>
        ))}
      </List>
    </div>
  );
};

export default UserList;


 