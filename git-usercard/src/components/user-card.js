import React from "react"

const UserCard = (props) => {
console.log(props)
// followers = props.followers
    return (
        <div>
        <div key={props.data.id} className="user">
            <img src ={props.data.avatar_url} alt="profile"/>
            <h2> {props.data.name} </h2>
            <h3> Location: {props.data.location} </h3>
            <p> Followers: {props.data.followers} </p>
            <p> Following: {props.data.following} </p>

        </div>
    {/* <div className="followers-container" >
    
      
        <div className="followers" key={followers.id}>
          <img width="200" src={followers.avatar_url}  alt={followers.name} />
          <h2> {followers.name} </h2>
            <h3> Location: {followers.location} </h3>
            <p> Followers: {followers.followers} </p>
            <p> Following: {followers.following} </p>
        </div>
        
    </div> */}
    </div>
        
    )
}

export default UserCard