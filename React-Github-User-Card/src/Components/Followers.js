import React from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import FollowerData from "./FollowerData";

class Followers extends React.Component {
    constructor() {
        super();

        this.state = {
            //set initial default state values
            follower: []
        }
    }

    componentDidMount() {
      this.fetchFollowerInfo() //fetch data for the default state value
    }
  
    fetchFollowerInfo = () => {
        axios.get(`https://api.github.com/users/Amber-Pittman/followers`) // gets my followers information
        .then(result => {
          
          this.setState({
            follower: result.data
            // avatar: result.data.avatar_url,
            // name: result.data.name,
            // followers: result.data.followers,
            // following: result.data.following,
            // location: result.data.location,
            // bio: result.data.bio
          })
        })
        .catch(error => {
          console.log("Error getting GH Followers Info: ", error)
        })
      }

    
      render() {
        return (
            <div>
                {this.state.follower.map((item, index)=> (
                    <FollowerData item={item} key={index} />
                ))}
            </div>
        )
    }
}


export default Followers;