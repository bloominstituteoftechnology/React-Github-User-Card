import React from 'react';
import axios from "axios";
import FollowersCard from "./FollowersCard";


class Followers extends React.Component {

    state ={
      followers: [],
    }
    
    componentDidMount = () => {
      // let followersArray =[];
      // followersArray.forEach(follower =>
    axios
    .get(`https://api.github.com/users/Sara-DLC/followers`)
    .then (res => {
      console.log("follower data", res.data);
      this.setState({
        followers: res.data.login,
        img: res.data.avatar_url,
        bio: res.data.bio,
      });
    })
    .catch (error => console.log (error));
    
  }
  

  
    render (){
    return (
      <div>
       
        <FollowersCard  followers={this.state.login} img={this.state.img} bio={this.state.bio}  />
      </div>
    );
    }
  }
  
  export default Followers;