import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Badge
} from "shards-react";

export default function FollowCard({ followers }) {
  return (
    <Card style={{ maxWidth: "450px" }}>
      <CardHeader>
        <CardImg src={`${followers.avatar_url}`} width="250px" height="250px" />
      </CardHeader>

      <CardBody>
        {followers.login}
        <br />
        <Badge outline pill>
          {followers.type}
        </Badge>
      </CardBody>
    </Card>
  );
}
