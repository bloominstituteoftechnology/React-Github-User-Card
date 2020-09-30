import React from 'react'


class Followers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            follower: []
        }
    }

    render(){
        return(
            <div>
<div>

     {this.props.followers.map(follower =>
                <div className="userCard">
                <h2>{follower.login}</h2>
                <img className="userImg" src={follower.avatar_url}/>
                <p>{follower.location}</p>
                <p>{follower.bio}</p>
                </div>
    )}
            </div>
            </div>
        )
    }
}

export default Followers;