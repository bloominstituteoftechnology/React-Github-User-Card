import React from "react";
import {Card, CardImg, CardText} from "reactstrap"


function UserCard(props) {
  console.log(props.login);

  return (
    <div className="userCards">
      <Card key={props.id}>
        <div>
          <CardImg src={props.avatar_url} alt={props.id}></CardImg>
          <CardText>{props.login}</CardText>
          <CardText>{props.location}</CardText>
        </div>
      </Card>
    </div>
  );
}

export default UserCard;