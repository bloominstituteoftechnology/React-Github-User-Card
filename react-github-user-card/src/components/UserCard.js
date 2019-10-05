import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #FFF;
  margin-bottom: 30px;
`

const Column = styled.div`
    display:flex;
    flex-direction: column;
`
function UserCard (props) {
    console.log(props);
    return (
       <Card>
           <img className="avatar" src={props.avatar_url}></img>
           <Column>
           <h3>{props.name}</h3>
           <h5 className="login">{props.login}</h5>
           <p>Location: {props.location || "not available"}</p>
           <p>Profile:</p><a href={props.html_url}>{props.html_url}</a>
           <p>Followers: {props.followers}</p>
           <p>Following: {props.following}</p>
           </Column>
           </Card>
    )
}


export default UserCard;