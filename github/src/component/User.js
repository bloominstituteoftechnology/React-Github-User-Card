import React from "react";
import axios from "axios";
import "../App.css";

 class User extends React.Component {
  constructor(){
      super();
      this.state = {
          user:{}
          ,followers:[]
      }
    
}
    componentDidMount() {
        axios
          .get("https://api.github.com/users/AhmedBarre10")
       .then(res=>{
        console.log(res.data)

           this.setState({
               user:res.data
           })
       })
          .catch(err => console.log(err));
    
        axios
          .get("https://api.github.com/users/AhmedBarre10/followers")
           .then(res=>{
               console.log(res.data)
               this.setState({
                   followers:res.data
               })
           })
      }
      

  render() {
   
        return (
          <div>
            <div className="cards">
                
                  
                    <h2>{this.state.user.login}</h2>
                    <img src = {this.state.user.avatar_url}></img>


            </div>
            <div>
                  {this.state.followers.map(follower => (
                    <div>
                    <img src = {follower.avatar_url}></img>
                    <h2>{follower.login}</h2>
                    </div>


                  // followers = {follower.followers_url}
                ))}
            </div>
            </div>

          )
      }
     


}
export default User