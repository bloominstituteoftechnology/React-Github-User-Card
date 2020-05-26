import React, { Component, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import { Link} from 'react-router-dom'
import  Repos  from '../Repos/Repos'

export class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        repos: PropTypes.array.isRequired,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired,
    }



    render() {
        const {
            name, 
            avatar_url,
            location, 
            bio,
            company,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists
        } = this.props.user

        const { loading, repos} = this.props;

        if (loading) return <Spinner />

        return (
            <Fragment>
              <Link to='/' className="btn btn-light">
                  Back to Search
              </Link>
              <div className="card grid-2">
                  <div className="all-center">
                  <img src={avatar_url} 
                  alt="avatar for user"
                  className="round-img" 
                  style={{ width: '150px'}}
                  />
                  <h1>{name}</h1>
                  <p>Location: {location}</p>
              </div>
              <div>
                  {bio && <Fragment>
                      <h3>Bio</h3>
                      <p>{bio}</p>
                      </Fragment>}
                      <a href={html_url} className="btn btn-dark my-1">Visit GitHub Profile</a>
                      <ul>
                          <li>
                              <Fragment>
                                  <strong>Username:</strong>{login}
                              </Fragment>
                          </li>

                          <li>
                              <Fragment>
                                  <strong>Company:</strong>{company}
                              </Fragment>
                          </li>

                          <li>
                              <Fragment>
                                  <strong>Website:</strong>{blog}
                              </Fragment>
                          </li>
                      </ul>
                </div>
              </div>
              <div className="card text-center">
                  <div className="badge badge-primary">Followers: {followers}</div>
                  <div className="badge badge-success">Following: {following}</div>
                  <div className="badge badge-light">Public Repos: {public_repos}</div>
                  <div className="badge badge-dark">Public Gists: {public_gists}</div>
              </div>
              <Repos repos={ repos }/>
            </Fragment>
        )
    }
}

export default User;