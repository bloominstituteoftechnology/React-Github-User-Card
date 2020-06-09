import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck
  } from 'reactstrap';

function Users(props) {
    console.log(props)
    return (
        <div className="box">
       {props.followers.map(follower => (
           <div className="body-card" key={follower.id}>
        <CardImg width="20%" src={follower.avatar_url} alt="profile"/>
        <CardBody>
        <Button><a href={follower.html_url}>{follower.login}</a></Button>
        </CardBody>
        </div>
       ))}
        </div>
    )
}

export default Users