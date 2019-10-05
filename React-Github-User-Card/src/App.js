import React from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import Followers from "./Components/Followers";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            //set initial default state values
            avatar: "",
            name: "", // remember not to hardcode information here
            username: "",
            followers: "",
            location: ""
        }
    }

    componentDidMount() {
      this.fetchUserInfo() //fetch data for the default state value
    }
  
    fetchUserInfo = () => {
        axios.get(`https://api.github.com/users/Amber-Pittman`) // gets my personal card information
        .then(response => {
          
          this.setState({
              avatar: response.data.avatar_url,
              name: response.data.name,
              followers: response.data.followers,
              following: response.data.following,
              location: response.data.location,
              bio: response.data.bio
          })
        })
        .catch(error => {
          console.log("Error getting GH User Info: ", error)
        })
      }

    
    render() {
        return (
            <div class="card">
              <h1>GitHub Profile Card</h1>
              <div class="card-info">
                <img src={this.state.avatar} 
                     data-pin-nopin="true" 
                     alt="user's github profile avatar" />
                  <h3 class="name">{this.state.name}</h3>
                  <p class="username">{this.state.username}</p>
                  <p>Location: {this.state.location || "Not Available"}</p>
                  {/* <p>Profile:  
                  <a href={address to users github page}>{address to users github page}</a>
                  </p>  */}
                  <p>Followers: {this.state.followers}</p>
                  <p>Following: {this.state.following}</p>
                  <p>Bio: {this.state.bio}</p>
              </div>
              <h3> {this.state.name}'s Followers</h3>
              <Followers />
            </div>
        )
    }
}


export default App;