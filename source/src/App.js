import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount(){
    axios
    .get('https://api.github.com/users/juarezfrench')
    // .then(res => console.log(res.data))
   
    .then(res =>this.setState({user: res.data}))
    
    .catch(err => console.err("Something is wrong with user data. Take a look here:", err));

  axios
  .get('https://api.github.com/users/juarezfrench/followers')
  // .then(res => console.log(res.data))
  .then(res =>this.setState({followers: res.data}))
  // console.log('App.js -> %cres.data:', 'color: magenta', res.data)

  .catch(err => console.console.error("Something is wrong with data. Take a look here:", err));


}

componentDidUpdate(){
  console.log('THIS update State:', this.state)
}

 render() {
  console.log('This.state.user:', this.state.user)
  console.log('This.state.followers:', this.state.followers)
  
  return (
    <div className="App">
      <div user={this.state.user} followers={this.state.followers} />
    </div>
  );
}
}

export default App;