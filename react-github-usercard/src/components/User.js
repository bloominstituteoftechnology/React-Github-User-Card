import React from 'react';
import axios from "axios";
import UserCard from "./UserCard";

class User extends React.Component {

    state ={
      name: [],
    }
  
    componentDidMount () {
      axios
      .get(`https://api.github.com/users/caidenclark`)
      .then (res => {
        this.setState({
          name: res.data.name,
          img: res.data.avatar_url,
          bio: res.data.bio,
        });
      })
      .catch (error => console.log (error));
    }
  
  
    render (){
    return (
      <div>
        <UserCard user={this.state.name} img={this.state.img} bio={this.state.bio}  />
      </div>
    );
    }
  }
  
  export default User;