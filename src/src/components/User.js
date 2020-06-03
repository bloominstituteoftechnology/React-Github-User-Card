import React, { Component, Fragment } from 'react';
import Spinner from './Spinner';
import Follower from './follows/Follower';
import { Link } from 'react-router-dom';
import GitHubCalendar from 'react-github-calendar';


export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    //passed through getUser and got from App.js params Route for User
    this.props.getUserFollower(this.props.match.params.login);
   
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
      following,
      public_repos,
      public_gists,
    }= this.props.user;

    const {  loading, follower } = this.props;

    if (loading) return <Spinner />;

    return ( <Fragment>

      <Link to='/' className='btn btn-light'> Back to Search </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <img src={avatar_url} alt='avatar' className='round-img' style= {{ width: '150px' }} />
          <h2>{ name }</h2>
        </div>
        <div>
          {/* //if user has a bio show the bio */}
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:&nbsp;</strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
            {location && (
                <Fragment>
                  <strong>Location:&nbsp;</strong>
                  {location}
                </Fragment>
              )}
            </li>
          </ul>
          <a href={html_url} className='btn btn-dark my-1'> View {name}'s Github Profile </a>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
    <div>
      <h3>Github Calendar</h3>
   <GitHubCalendar username={login} />
    </div>

      <div style={userStyle}>
      <Follower follower={follower} />
      </div>
     
    </Fragment>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'

}
export default User
