import React from "react";


  function User(props){
      console.log("KH: User.js: User 'render' called")
      return(
          
          <div className="usercard">
         <div className="user" >
             <img src={props.user.avatar_url} alt="github"/>
             <div>
                 <h3>{props.user.login}</h3>
                <div classname= "github-btn">
                <a href={props.user.html_url}>
                <img src="https://www.cloudsavvyit.com/p/uploads/2020/10/d6528811.png?width=1198&trim=1,1&bg-color=000&pad=1,1"   width="100" height="100"/>
                </a>
                </div>
                
                              </div>
         </div>
         </div>
      )
  }
  
  export default User;