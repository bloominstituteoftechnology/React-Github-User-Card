import React from 'react';
import UserList from './UserList.js';
import styled from 'styled-components';

const List=styled.div`
  display:flex;
  height:350px;
  width:600px;
  font-family:sans-serif;
  color:navy;
  display:block;
  justify-content:center;
  padding:125px;
  color:purple;
  text-decoration:underline;
`

const Image=styled.img`
  display:flex;
  display:block;
  padding-left:315px;
  height:300px;
  width:300px;
`
const Align=styled.h3`
    padding-left:315px;
    margin:10px;

`

const UserCard = props => {
  console.log('UserCard Props', props);
  return (
    <div>
      <div>
        <List>
          <Image src={props.user.avatar_url} />
          <Align>User Login: {props.user.login}</Align>
          <Align>User Location: {props.user.location}</Align>
          <Align>User Following: {props.user.following}</Align>
          <Align>User Followers: {props.user.followers}</Align>
        </List>

        <UserList user={props.user} followers={props.followers} />
      </div>
    </div>
  );
};

export default UserCard;