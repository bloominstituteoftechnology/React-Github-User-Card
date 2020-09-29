import React from 'react'
import './User.css'

class User extends React.Component {

   render() {

      return(

         <div className='user'>
            <h3>{this.props.eachUser.name === null ? this.props.eachUser.login : this.props.eachUser.name}</h3>
            <img src={this.props.eachUser.avatar_url} alt={`${this.props.eachUser.name} profile`}/>
            <p>Username: {this.props.eachUser.login}</p>
            <p>{this.props.eachUser.html_url}</p>
            <p>Followers: {this.props.eachUser.followers}</p>
            <p>Following: {this.props.eachUser.following}</p>
            <p>Location: {this.props.eachUser.location !== null ? this.props.eachUser.location : 'N/A' }</p>
         </div>

      )

   }

}

export default User