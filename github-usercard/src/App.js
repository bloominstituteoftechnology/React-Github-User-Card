import React from "react";
import axios from "axios";
import "./App.css";
import styled from "styled-components";
import Usercard from "./Components/Usercard";
import Followers from "./Components/Followers";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Cardwrap = styled.div`
  display: flex;
  padding: 50px;
`;
const Headertext = styled.header`
  font-size: 2em;
  background-color: #b3ccff;
  width: 100%;
  text-align: center;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "lindseykeller",
      userData: [],
      followersData: [],
      search: "",
      typedString: "",
    };
  }

  getUserInfo = () => {
    axios
      .get(
        `https://api.github.com/users/${this.state.user}`
      )
      .then((res) => {
        console.log(res);
        this.setState({ userData: res.data });
      })
      .catch((error) => console.log("Error", error));
  };

  getFollowersInfo = () => {
    axios
      .get(
        `https://api.github.com/users/${this.state.user}/followers`
      )
      .then((res) => {
        this.setState({ followersData: res.data });
        console.log(res.data);
      })
      .catch((error) => console.log("Error", error));
  };

  componentDidMount() {
    this.getUserInfo();
    this.getFollowersInfo();
  }


  render() {
    return (
      <StyledDiv>
        <Headertext>React GitHub User Card</Headertext>

        <Cardwrap>
          <Usercard
            userData={this.state.userData}
            submitHandler={this.submitHandler}
            typedString={this.typedString}
            searchHandler={this.searchHandler}
          />
        </Cardwrap>

        <Followers
          followersData={this.state.followersData}
          getUserInfo={this.getUserInfo}
        />
      </StyledDiv>
    );
  }
}

export default App;
