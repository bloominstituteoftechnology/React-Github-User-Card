import React from 'react';
import './App.css';

const Followers =(props)=>{
    return(
        <div className = "container">
           {props.stalks.map((stalking)=>(
               <div className = "card" key={stalking.id}>
                <img src={stalking.avatar_url} alt="profile pic" width = "300px"></img>
                <h3>Git User: {stalking.login}</h3>
                </div>
      ))}  
        </div>
    )
}
export default Followers;