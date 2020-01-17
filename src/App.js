import React from "react";
import UserCard from "./components/UserCard";
import "./App.css";

class App extends React.Component {
  state = {
    user: [],
    followers: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/bkoehler2016")
      .then(response => {
        this.setState({
          user: response.data
        });
        console.log(response);
      })
      .catch(error => console.log(error))
      .finally(
        fetch(`https://api.github.com/users/bkoehler2016/followers`)
          .then(res => {
            console.log(res);
            this.setState({
              followers: res.data
            });
          })
          .catch(err => {
            console.log(err);
          })
          .finally(console.log("Fetch Complete"))
      );
  }

  render() {
    return (
      <div className="App">
        <h1>Git Hub Card</h1>
        <section className="card-container"></section>
      </div>
    );
  }
}

export default App;
