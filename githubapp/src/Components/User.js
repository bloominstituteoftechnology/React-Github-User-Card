import React from "react";


  function User(props){
      console.log("KH: User.js: User 'render' called")
      return(
          
          <div className="usercard">
         <div className="user">
             <img src={props.user.avatar_url} alt="github"/>
             <div>
                 <h1>{props.user.login}</h1>
                 <p>{props.user.location}</p>

                 <button href={props.user.html_url}>Visit {props.user.login}'s profile</button>
             </div>
         </div>
         </div>
      )
  }
  
  export default User;