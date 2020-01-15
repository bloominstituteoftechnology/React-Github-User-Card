import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const UsersCard = props => {
  return (
    <Card className="card">
      <CardTitle>
      <CardImg className="card-img " src={props.user.avatar_url} alt="Avatar"/> 
      <CardSubtitle>Login: {props.user.login}</CardSubtitle>
      <CardSubtitle>URL: {props.user.html_url}</CardSubtitle>
      <CardSubtitle>UserId: {props.user.id}</CardSubtitle>
      <CardSubtitle>Type: {props.user.type}</CardSubtitle>
      </CardTitle>
    </Card>
  );
};

export default UsersCard;
