import React from 'react';


function UserCard (props) {
  
  console.log("props followers", props.followers)
  
    return (
      <div className="App">
        
        {props.userData.map(data => (
          <div key={data.id}>
            <img src = {data.avatar_url} alt= {data.name}/>
            <h2>Name: {data.name}</h2>
            <h3>Bio: {data.bio}</h3>
          </div>

        ))}

        {props.followers.map(follower => (
          
          <div key={follower.id}>
            <img src={follower.avatar_url}/>
            <h2>Name: {follower.name}</h2>
            <h3>Bio: {follower.bio}</h3>
            

          </div>
        ))}
      </div>
    );
}

export default UserCard;
