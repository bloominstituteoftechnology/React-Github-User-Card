import React, { Component } from 'react'


export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    //passed through getUser and got from App.js params Route for User
  }

  render() {
    const { 
      name,
      avatar_url,
      location,
      bio,
      html_url,
      login,
      followers,
      following
    }= this.props.user;

    const {  loading } = this.props;

    return (
      <div className='card'>
        <img src={avatar_url} alt='avatar' className='round-img'/>
        <div className='card-info'>
          <h2>{ name }</h2>
          <p> { login } </p>
          <p> Location: &nbsp; {location} </p>
          <p> Followers: &nbsp; {followers} </p>
          <p> Following: &nbsp; {following} </p>
          <p> Bio: &nbsp; {bio} </p>
          <p>  <a href={html_url} className='btn btn-dark'> 
                  Profile...
              </a>  
          </p>
        </div>
      </div>
    )
  }
}

export default User
