import React from "react";
import axios from "axios";
import "./App.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

//this bitch gon' hold all the things, bruh.

class App extends React.Component {
  state = {
    gitdata: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/avawing")
      .then((res) => {
        this.setState({ gitdata: res.data });
      })
      .catch((error) => {
        console.log(`Everything is broken: ${error}`);
      });
  }


  render() {
    return (
      <>
        <h1>User Card</h1>
        
        <Card>
        <CardBody>
          <CardTitle>{this.state.gitdata.name}</CardTitle>
          <CardSubtitle>{this.state.gitdata.login}</CardSubtitle>
        </CardBody>
        <img width="100%" src={this.state.gitdata.avatar_url} alt={this.state.gitdata.name} />
        <CardBody>
          <CardText>{this.state.gitdata.bio}</CardText>
          <CardLink href={this.state.html_url}>GitHub</CardLink>

        </CardBody>
      </Card>
        
      </>
    );
  }
}

export default App;
