import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from "./components/UserCard";
import Followers from "./components/Followers"

class App extends React.Component {

  state ={
    name: [],
  }

  componentDidMount () {
    axios
    .get(`https://api.github.com/users/Sara-DLC`)
    .then (res => {
      this.setState({
        name: res.data.name,
        img: res.data.avatar_url,
        bio: res.data.bio,
      });
    })
    .catch (error => console.log (error));
  }


  render (){
  return (
    <div>
      <h1>GitHub User Card</h1>
      <UserCard user={this.state.name} img={this.state.img} bio={this.state.bio}  />
      <Followers/>
    </div>
  );
  }
}

export default App;
