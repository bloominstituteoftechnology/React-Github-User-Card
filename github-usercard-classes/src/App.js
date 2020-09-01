import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  } 

  componentDidMount() {
    axios.get('https://api.github.com/users/saljahmi')
      .then(res=> {
        console.log(res)
        this.setState({
          user: res.data
        })
        console.log(this.state)
      })
      .catch(err => console.log(err))
  }

  // componentDidUpdate

  // handleChanges = e => {
  //   this.setState({
  //     user: e.target.value
  //   });
  // };

  // fetchFollowers = e => {
  //   e.preventDefault();
  //   axios.get('https://api.github.com/users/saljahmi/followers')
  //   .then(res=> {
  //     console.log(res)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })  
  // }



  render() {
    return(
      <div className = "App">
        <h1>Github User Card</h1>
        <div className = "user">
          <h2>{this.state.user.name}</h2>
          <img src={this.state.user.avatar_url} alt="user"/>
          <p><b>Github Profile:</b></p>
          <a href={this.state.user.html_url}>{this.state.user.html_url} </a>
          <p><b>Location:</b> {this.state.user.location}</p>
          <p><b>About:</b> {this.state.user.bio}</p>

        </div>
      </div>
    )
  }

}

export default App;
