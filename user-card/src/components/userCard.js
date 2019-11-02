import React from "react";



const UserCard = (props)=> {
      


    console.log("PROPS", props.data)

   return (
     <div>
      <h2>{props.data.login}</h2>
      <h2>{props.data.id}</h2>
      <p>{props.data.avatar_url}</p>




     </div>






   )




}

export default UserCard