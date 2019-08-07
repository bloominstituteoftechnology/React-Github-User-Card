import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col
} from "shards-react";
export default function HomePage({ users }) {
  return (
    <div className="mainUserWrapper">
      <Container className="mainUserMeta">
        <Row>
          <Col lg="3">
            <img src={`${users.avatar_url}`} />
          </Col>
          <Col lg="5">
            <h2>{this.state.users.name}</h2>
            <p>{this.state.users.location}</p>

            <p>"{this.state.users.bio}"</p>
          </Col>
          <Col sm="2">
            <h2>{this.state.users.following}</h2>
            <p>Following</p>
          </Col>
          <Col sm="2">
            <h2>{this.state.users.followers}</h2>
            <p>Follwers</p>
          </Col>
          <Col sm="2">
            <h2>{this.state.users.public_repos}</h2>
            <p>Repos</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
