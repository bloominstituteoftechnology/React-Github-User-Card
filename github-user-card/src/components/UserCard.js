import React from "react";
import styled from "styled-components";

//styling cards

const Card = styled.div`
  display: flex;
  justify-content: center;
  background: chocolate;
  margin: 25px 400px 25px 200px;
  width: 50%;
  height: auto;
`;
const UserCard = (props) => {
    console.log(props);
  
    return (
      <Card>
        <img src={props.userInfo.avatar_url} />
        <div>
          <h3>{props.userInfo.name}</h3>
          <p>{props.userInfo.login}</p>
          <p>{props.userInfo.location}</p>
          <a href={props.userInfo.html_url}>{props.userInfo.login}'s profile</a>
        </div>
      </Card>
    );
  };
  
  export default UserCard;

