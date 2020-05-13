import React from "react"

export default class FollowerCard extends React.Component{

    render(){

        return(
            <div>
            
                {this.props.followersData.map(follower =>
                    <div className="card2">
                        <img width="150px" src={follower.avatar_url} className="followers_img" />
                        <div className="data2">
                            <p className="login2">Name: {follower.login}</p>
                            <p>URL: {follower.html_url}</p>
                        </div>
                    </div>
                    
                )}
            
            </div>
        )


    }
}