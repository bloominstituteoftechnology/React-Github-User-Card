import React from "react"



class UserCard extends React.Component{











render(){

return (
    <div >
     <img src="" alt=""/>
     <div className="usercard-container">
         {
         this.state.users.map(user => (
             <>
            <h3 {user.login} ></h3>
            <p>{user.followers_url}</p>
            <p>{user.following_url}.</p>
            <a {user.avatar_url}></a>
            <p></p>
            <p></p>
        

            </>

             ))
         }
      </div> 
   </div>








    </div>




)






}




}