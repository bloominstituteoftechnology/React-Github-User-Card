import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from './UserCard';

class App extends React.Component {

state = {
  user : [],
  followers: []
}


componentDidMount(){
Promise.all([axios.get("https://api.github.com/users/duointherain"), axios.get("https://api.github.com/users/duointherain/followers")])
.then(([res1, res2]) => {
  console.log("res1", res1.data)
  console.log("res2", res2.data)
  this.setState({
    user: res1.data,
    followers: res2.data
  })
})
.catch(err => {
  console.log('you have an error :(');
});
}

  render() {
    return (
      <div className="App">
        {(this.state.user.length === 0)?<h3>Getting Users...</h3>:<UserCard user={this.state.user} followers={this.state.followers}/>}
      </div>
    );
  }
}

export default App;