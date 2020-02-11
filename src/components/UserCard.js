import React from 'react';


function UserCard (props) {
  

  
    return (
      <div className="App">
        
        {props.personalData.map(data => (
          <div key={data.id}>
            <img src = {data.avatar_url} alt= {data.name}/>
            <h2>Name: {data.name}</h2>
            <h3>Bio: {data.bio}</h3>
            <p>Followers: {data.followers_url}</p>


          </div>




        ))}
      </div>
    );
}

export default UserCard;
