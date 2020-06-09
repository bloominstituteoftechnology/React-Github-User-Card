import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function Users(props) {
    console.log(props)
    return (
        <Card className="box">
       {props.followers.map(follower => (
           <div className="body" key={follower.id}>
        <CardImg width="20%" src={follower.avatar_url} alt="profile"/>
        <CardBody>
        <Button><a href={follower.html_url}>{follower.login}</a></Button>
        </CardBody>
        </div>
       ))}
        </Card>
    )
}

export default Users