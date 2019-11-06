import React from "react";
import Following from './follow';
 


const UserCard = (props)=> {
      


 
   return (

    <div> 
     <div className = "UserCard">
      <h2 className = "Login">{props.data.login}</h2>
      <h2>{props.data.id}</h2>
      <p>{props.data.avatar_url}</p>
      <p>{props.data.repos_url}</p>
      </div>

      {props.following.map (f => {

          return (
            
            <Following   following = {f}/>
            
           
          )
      })}


      

        
     


      

     </div>






   )

 


}

export default UserCard