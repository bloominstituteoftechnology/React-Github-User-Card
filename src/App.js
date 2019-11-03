import React from "react";
import UserCard from "./UserCard"
import FollowerCard from "./FollowerCard"

import "./App.css";

class App extends React.Component {

  state = {
    data: {},
    dataFollowers: [],
  }

  // componentDidMount() {
  //   fetch(`https://api.github.com/users/Git-Grobe`)
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res, 'DATA');
  //     this.setState({
  //       data: res
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }
  
  componentWillMount() {
    Promise.all([
      fetch(`https://api.github.com/users/Git-Grobe`),
      fetch(`https://api.github.com/users/Git-Grobe/followers`)
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => this.setState({
      data: data1,
      dataFollowers: data2
    }))
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <>
      {console.log(this.state.data.name, 'AHHH NAME')}
      {console.log(this.state.dataFollowers, 'AHHH 2')}
      <UserCard username={this.state.data.name} image={this.state.data.avatar_url}/>
      <FollowerCard followers={this.state.dataFollowers}/>
      </>
    );
  }
}

export default App;
