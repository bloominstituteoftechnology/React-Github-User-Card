import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Badge,
  Container
} from "shards-react";

export default function RepoCard({ repos }) {
  return (
    <Card className="repoCard">
      <CardBody>
        <CardTitle>
          <a href={`${repos.html_url}`}>{repos.name}</a>
        </CardTitle>
        <p>{repos.description}</p>
      </CardBody>
    </Card>
  );
}
