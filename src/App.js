import React from "react";
import { Container, Row } from "reactstrap";
import axios from "axios";
import FollowerCard from "./components/FollowerCard.js";
import HeaderCard from "./components/HeaderCard.js";
import ContributionGraphic from "./components/ContributionGraphic";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      myData: {},
      followers: []
    };
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/Air-Bear").then(res => {
      this.setState({myData: res.data});
    });

    axios.get("https://api.github.com/users/Air-Bear/followers").then(res => {
      this.setState({followers: res.data});
      console.log(this.state);
    });
  }

  render(){
    return (
      <>
        <HeaderCard data={this.state.myData} />
        <ContributionGraphic />
        <Container>
          <Row>
          {this.state.followers ? this.state.followers.map(follower => (<FollowerCard key={follower.id} follower={follower} />)) : null}
          </Row>
        </Container>
      </>
      
    );
  }
}

export default App;
