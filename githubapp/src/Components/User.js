import React from "react";


  function User(props){
      console.log("KH: User.js: User 'render' called")
      return(
          
          <div className="usercard">
         <div className="user">
             <img src={props.user.avatar_url} alt="github"/>
             <div>
                 <h1>{props.user.login}</h1>
                 <a href={props.user.html_url}>Visit {props.user.login}'s profile</a>
                 <p>{props.user.location}</p>
                              </div>
         </div>
         </div>
      )
  }
  
  export default User;