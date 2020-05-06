import React from "react";
//render the followers data
export default class FollowerCard extends React.Component{

    render(){

        return(
            <div>
                {this.props.followers.map(follower =>
                    <p>{follower.login}</p>    
                )}
            </div>
        )


    }
}