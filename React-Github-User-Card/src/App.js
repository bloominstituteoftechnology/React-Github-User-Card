import React from "react";
// import ReactDOM from "react-dom";
import axios from "axios";

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
        .then(result => {
          
          this.setState({
              avatar: result.data.avatar_url,
              name: result.data.name,
              followers: result.data.followers,
              following: result.data.following,
              location: result.data.location,
              bio: result.data.bio
          })
        })
        .catch(error => {
          console.log("Error getting GH User Info: ", error)
        })
      }

    
    render() {
        return (
            <div class="card">
              <div class="card-info">
                <img src={this.state.avatar} data-pin-nopin="true" alt="user's github profile image" />
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
            </div>
        )
    }
}


export default App;