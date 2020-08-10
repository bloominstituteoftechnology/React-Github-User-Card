import React from "react";
import axios from "axios";


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
        <div className="Followers-Card" >

            <p>Hey from Followers.js</p>
           
        </div>    
    );
    };
};

export default Followers;