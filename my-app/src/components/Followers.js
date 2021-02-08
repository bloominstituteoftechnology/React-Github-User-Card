import React from "react";
import axios from "axios";
import App from "../App.css"


class Followers extends React.Component {
    constructor(){
        console.log("Constructor");
        super();
        this.state = {
          followers: []
    
        };
      }

    componentDidMount(){
        axios
        .get(`https://api.github.com/users/AHangstefer/followers`)
        .then((res)=> {
          this.setState({ followers: res.data });
          console.log("got the data for followers", res)
        })
        .catch((err)=> console.log("Get Followers shit's hittin the fan", err))
     
      };
     
    render(){
    return(
        <div className="Follower-Card" >

            <h2>Followers</h2>
            <div className = "peeps">
                {this.state.followers.map((peep)=> (
                  <div className = "peeps-info" key= {peep.id}> 
                    <p>User Name: {peep.login} </p>
                    <a href = {peep.html_url}> View My GitHub </a>
                   <div className = "image"> 
                    <img src = {peep.avatar_url} alt="person" />
                   </div> 
                  </div>
                 ))};
                
            </div>

           
        </div>    
    );
    };
};

export default Followers;