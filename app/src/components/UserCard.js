import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';


const UserCard = (props) => {
    

    return (
        <div>
          <Card>
            <CardImg top width="100%" src={props.user.avatar_url} alt="Card image cap" />
            <CardBody>
              <CardTitle>{props.user.login}</CardTitle>
              <CardTitle>{props.user.name}</CardTitle>
              <CardSubtitle>Followers: {props.user.followers}</CardSubtitle>
              <CardText>{props.user.bio}</CardText>
            </CardBody>
          </Card>
        </div>
      );
};

export default UserCard;