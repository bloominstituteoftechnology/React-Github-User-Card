import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from './UserCard';

class App extends React.Component {

state = {
  user : [],
}


componentDidMount(){
axios.get("https://api.github.com/users/duointherain")
.then(res => {
  console.log(res.data)
  this.setState({
    user: res.data
  })
})
.catch(err => {
  console.log('you have an error :(');
});
}

  render() {
    return (
      <div className="App">
        {(this.state.user.length === 0)?<h3>Gitting Users...</h3>:<UserCard user={this.state.user}/>}
      </div>
    );
  }
}

export default App;
