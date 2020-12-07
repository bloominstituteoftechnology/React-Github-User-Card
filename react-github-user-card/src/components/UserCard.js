import React from 'react'


class UserCard extends React.Component {

    render(props) {

        if(this.props.login === undefined){
            return(
                <div className='card'>  
                    <p className='secondary'>Enter a user to get info</p>
                </div>
            )
        } else {

            let followerButton;
            if(this.props.button === 'display') {
                    followerButton = <button value={this.props.login} onClick={this.props.handleClick}>See followers</button>
            }
    
            return (
                <div className='card'>
                    <img className='user-image' src={this.props.avatar_url} alt='user profile'/>
                    <div className='card-header'>
                        <h3>{this.props.login}</h3>
                        <p className='secondary'>{this.props.location}</p>
                        {followerButton}
                    </div>
                    <p className='bio secondary'>
                        {this.props.bio}
                    </p>
                </div>
            )
        }
    }


}

export default UserCard
