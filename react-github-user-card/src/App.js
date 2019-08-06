import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: "hello"
    };
  }

  componentDidMount() {
    this.fetchGitHub();
  }

  fetchGitHub = () => {
    fetch("https://api.github.com/users/lawsonarichard")
      .then(response => {
        return response.json();
      })
      .then(users => this.setState({ users: users }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="mainWrapper">
        <div className="mainContainer">
          <Card style={{ maxWidth: "300px" }}>
            <CardHeader>{this.state.users.name}</CardHeader>
            <CardImg src={`${this.state.users.avatar_url}`} />
            <CardBody>
              <CardTitle>{this.state.users.location}</CardTitle>
              <p>{this.state.users.bio}</p>
            </CardBody>
            <CardFooter>
              Followers: {this.state.users.followers} | Following:{" "}
              {this.state.users.following}
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }
}
export default App;
