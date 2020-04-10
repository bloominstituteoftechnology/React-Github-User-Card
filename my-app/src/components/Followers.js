import React from "react";
import { Card, Dimmer, Loader } from "semantic-ui-react";

const Followers = friend => (
  <div>
    <Card.Group itemsPerRow={4}>
      {friend.friend.map(photo => {
        return <Card raised image={photo.avatar_url} key={Math.random()} />;
      })}
    </Card.Group>
  </div>
);

export default Followers;
