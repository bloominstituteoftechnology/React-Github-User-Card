import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Button, CardSubtitle
  } from 'reactstrap';


const FollowerCard = (props) => {


    return (
        <div className="followerDiv" >
            {props.followers.map((follower) => {
                return (
                    <Card className="follower" key={follower.id} >
                    <CardImg top width="100%" src={follower.avatar_url} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{follower.login}</CardTitle>
                        <CardSubtitle>{follower.name}</CardSubtitle>
                    </CardBody>
                    <Button color="info" >Visit</Button>
                    </Card>
                )
            })}
        </div>
    );
};

export default FollowerCard;