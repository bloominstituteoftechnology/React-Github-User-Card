import React from 'react';
import axios from 'axios';
import Followers from "./components/Followers";
import Profile from "./components/Profile";
import "./App.css";


class App extends React.Component {
 state = {
   user: {},
   followers: []
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/MosharrafMusa').then(response => {
      console.log(response.data, "user response.data");
      this.setState({ user: response.data });
    });

    axios.get('https://api.github.com/users/MosharrafMusa/followers').then(response => {
     console.log(response.data, "followers response.data");
      this.setState({ followers: response.data});
    });
  }


  render() {
    console.log(this.state.user);
    console.log(this.state.followers);
    return (
      <>
       <div className="app">
          <h1>GitHub User Cards</h1>
          <Profile user={this.state.user} />
          <Followers
            followers={this.state.followers}
            key={this.state.followers}
          />
        </div>
      </>
    );
  }
}

export default App;