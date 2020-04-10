import React from "react";
import { Card } from "semantic-ui-react";

const Followers = friend => (
  <div>
    <Card.Group itemsPerRow={4}>
      {friend.friend.map(user => {
        return (
          <Card
            raised
            image={user.avatar_url}
            key={Math.random()}
            as="a"
            href={user.html_url}
            target="blank"
          />
        );
      })}
    </Card.Group>
  </div>
);

export default Followers;
