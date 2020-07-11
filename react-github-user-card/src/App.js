import React, { Fragment } from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      myFollowers: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/PauloFurtunatoAlexandre/followers")
      .then((res) => res.json())
      .then((followers) => {
        this.setState({
          myFollowers: followers,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center m-5">This is working!</h1>
        <div className="row">
          <div className="col-md-4 col-sm-12 m-5">
            {this.state.myFollowers.map((follower) => (
              <div className="follower-card card bg-light m-3 float-md-left" key={follower.login}>
                <img
                  className="card-img-top"
                  src={follower.avatar_url}
                  alt={follower.login}
                />
                <div className="card-body">
                  <h3 className="card-title">{follower.login}</h3>
                  <a
                    className="btn btn-primary m-2"
                    href={follower.organizations_url}
                  >
                    Organizations
                  </a>
                  <a
                    className="btn btn-primary m-2"
                    href={follower.followers_url}
                  >
                    Followers Url
                  </a>
                </div>
              </div>
            ))}
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default App;
