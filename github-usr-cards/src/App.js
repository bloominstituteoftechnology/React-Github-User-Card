import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Gitcard from "./Components/Gitcard"

/*
  The github react cards assignment
*/
class App extends React.Component {
  constructor(){
    super();
    this.state = {
        usersname:"",
        username:"",
        userimg: "",  
        newusr: ""
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/extrude575757")
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "success") {
          this.setState({ userimg: json.avatar_url });
          this.setState({ username: json.login });
          this.setState({ usersname: json.name });
        } else {
          console.error("App.js CompDidMount: jsonstatus false  error fetching githubbers though its forced into a set state anyway: ", json);
          this.setState({ userimg: json.avatar_url });
          this.setState({ username: json.login });
          this.setState({ usersname: json.name });
        }
      })
      .catch((err) => console.error("App.js CompDidMount: Major error from catch function ", err));
  // Fetch followers here as well https://api.github.com/users/< Your github name >/followers
  
    }
  /*Some names
   bigknell','tetondan',
'dustinmyers', 'justsml', 'luishrd', 'snowcoding','james-coulter
        */
  handleUserChange = (e) => {
    this.setState({
      newusr: e.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.newusr !== this.state.newusr) {
     
console.log(`cdu: here prevProps${prevState}` );
    }

  }

  handleSetNewUser = (e) => { 
    fetch(`https://api.github.com/users/${this.state.newusr}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "success") {
          this.setState({ userimg: json.avatar_url });
          this.setState({ username: json.login });
          this.setState({ usersname: json.name });
        } else {
          console.error("error fetching githubbers: handleSetNewUser forcing it any way", json);
          this.setState({ userimg: json.avatar_url });
          this.setState({ username: json.login });
          this.setState({ usersname: json.name });
        }
      })
      .catch((err) => console.error("App.js HandleSetNewUser You've got errors: ", err));
  };

  render() {
    return (
     
      <div className="container">
         <Gitcard />
          <h1>Checkout Someone's Github</h1>
          <div className="card">
            <h4 className="name">Username:{this.state.usersname}</h4>
            <input
              type="text"
              value={this.state.newusr}
              onChange={this.handleUserChange}
            />
            <button onClick={this.handleSetNewUser}>new user info</button>
          </div>
          <div><h1>Github User Stats</h1></div>
              <div className="card">
                    <p className="username">
                    Login: {this.state.username}
                    </p>
                    <img className="card"  alt="Github User Avatar Image" 
                    src={this.state.userimg} width="300px" />
            </div>
      </div>
    );
  }
}

export default App;