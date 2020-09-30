import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {

//initial state / API fetch will go here // 

state = {
  followers: []
}

componentDidMount() {
  axios
    .get('https://api.github.com/users/fibonacci85/followers')
  .then((res) => {
 console.log("response", res.data);
 this.setState({
   followers:[...this.state.followers, res.data],
 });
})
.catch((err) => {
  console.log("something went wrong", err);
});
};


  render(){
  return (
    <div className="App">
      <h1>GitHub Users</h1>

      <div className="userCard">
        {this.state.followers.map((user) => (
          <p>{this.state.user}</p>
        ))}
      </div>
    </div>
  );
}
}

export default App;
