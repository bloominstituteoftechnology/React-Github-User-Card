import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function FollowerCard({ follow }) {
  console.log("I am a prop", follow);
  return (
    <Card>
      <Card.Header>{follow.login}</Card.Header>
      <Image src={follow.avatar_url} wrapped ui={false} />
      <Card.Meta>{follow.location}</Card.Meta>
      <Card.Description>{follow.bio}</Card.Description>
    </Card>

    // <div className="follower-box">
    //   <img src={follow.avatar_url} alt="fun pic" />
    //   <h1>{follow.login}</h1>
    //   <h4>{follow.location}</h4>
    // </div>
  );
}
