import React from 'react';


class UserCard extends React.Component{

    render(){
        return(
            <div className="App">
              <h2>{this.props.github.login}</h2>
              <img className='pic' src={this.props.github.avatar_url} />
              <h4>Followers: {this.props.github.followers}</h4>
              <h4>Following: {this.props.github.following}</h4>
      
            </div>
        )
    }
}
export default UserCard