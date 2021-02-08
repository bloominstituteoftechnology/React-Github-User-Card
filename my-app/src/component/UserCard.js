import React from 'react'



class UserCard extends React.Component {


    render(){
        return(
            <div className='user-card'>
                <img src={this.props.userData.avatar_url}/>
                <h2>{this.props.userData.name}</h2>
                <p>{this.props.userData.login}</p>
                <p>{this.props.userData.bio}</p>
                <p>{this.props.userData.location}</p>
                <p>{this.props.userData.followers}</p>
                <p>{this.props.userData.following}</p>
            </div>
        )
    }
}
   

export default UserCard
