import React from "react";
import Following from './follow';



const UserCard = (props)=> {
      


    console.log("PROPS", props.following)

   return (
     <div>
      <h2>{props.data.login}</h2>
      <h2>{props.data.id}</h2>
      <p>{props.data.avatar_url}</p>
      <p>{props.data.repos_url}</p>

      {props.following.map (f => {

          return (
            // <h2>{f.login}</h2>
            <Following following = {props.following}/>

          )
      })}
 

     </div>






   )




}

export default UserCard