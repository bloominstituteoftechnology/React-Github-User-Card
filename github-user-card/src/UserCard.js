import React from 'react'
import FollowersCard from './FollowersCard'

class UserCard extends React.Component{
    propsShortcut=this.props.props;
    render(){
        return(
            <div>
                <h1>{this.propsShortcut.name}</h1>
                <h1>{this.propsShortcut.login}</h1>
                <h1>@{this.propsShortcut.twitter_username}</h1>
                <FollowersCard followers={this.propsShortcut.followers_url}/>
            </div>
        )
    }
}

export default UserCard;