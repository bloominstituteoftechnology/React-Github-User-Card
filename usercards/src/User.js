import React from "react";


function User({name,image,html_url}){
     return (
         <div className="My-profile">
             <img src={image} alt="avpic"/>
             <div className="urlcont">
                 <h2> {name} </h2>
                 <a href={html_url} className="url">
                 My GitHub
                     
                 </a>
             </div>
         </div>
     )
}

export default User;
