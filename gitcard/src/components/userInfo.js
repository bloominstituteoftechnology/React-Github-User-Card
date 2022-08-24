import React from "react";
import './userInfo.css'

class UserInfo extends React.Component{
    
    render () {
        const {avatar_url, bio, followers, location, name} = this.props.userInfo
        return(
            <div>
                <h3>user info</h3>
                <div className="card">
                     <div className="userInfoContainer">
                    <img src={avatar_url} alt= 'profile_picture'/>
                    <div className="textInfo">
                            <p>name: {name}</p>
                            <p>bio: {bio} </p>
                            <p>followers: {followers}</p>
                            <p>location: {location}</p>
                    </div>
                   
                </div>
                </div>
               
                
            </div>
        )
    }
}

export default UserInfo