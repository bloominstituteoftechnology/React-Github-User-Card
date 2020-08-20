import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import MyProfile from "./MyProfile";
import Cards from "./Cards";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myCard: [],
      cards: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/galosandoval")
      .then((res) => {
        this.setState({
          myCard: res.data,
        });
      })
      .then((res) => {
        return axios.get("https://api.github.com/users/galosandoval/followers");
      })
      .then((res) => {
        this.setState({
          cards: res.data,
        });
      })
      .catch((err) => console.log(err, "lol"));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyProfile key={this.state.myCard.id} myCard={this.state.myCard} />
        </header>
        <div>
          {/* {this.state.cards.map(friends => (
          <Cards key={friends.id} cards={this.state.cards} />
        ))} */}
          <Cards key={this.state.cards.id} cards={this.state.cards} />
        </div>
      </div>
    );
  }
}

export default App;
