import React from "react";

class Followers extends React.Component{
    render() {
        const {avatar_url, login} = this.props.followers
        return(
            <div>
                <h3>Followers info</h3>
                <div className="fcard">
                    <div className="followersContainer">
                    <img src={avatar_url} alt= 'profile_picture' />
                    <p>name: {login}</p>
                   
                </div>
                
                </div>
                
            </div>
        )
    }
}

export default Followers;