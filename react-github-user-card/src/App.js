import React, { Fragment } from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      myFollowers: [],
      me: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/PauloFurtunatoAlexandre")
      .then((response) => response.json())
      .then((paulo) => {
        this.setState({
          me: paulo,
        });
      })
      .catch((err) => console.log(err));

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
      <>
        <div className="container-fluid">
          <div className="top-header">
            <div className="row">
              <div className="col">
                <h1 className="text-center m-5">That's me!</h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center m-3">
            <div className="card">
              <img
                className="card-img-top"
                src={this.state.me.avatar_url}
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title text-center">{this.state.me.login}</h3>
                <a
                  className="btn btn-primary m-2"
                  href={this.state.me.organizations_url}
                >
                  Organizations
                </a>
                <a
                  className="btn btn-primary m-2"
                  href={this.state.me.followers_url}
                >
                  Followers Url
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid justify-content-center">
          <div className="top-header">
            <div className="row">
              <div className="col">
                <h1 className="text-center m-5">My Followers!</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col m-5">
              {this.state.myFollowers.map((follower) => (
                <div
                  className="follower-card card bg-light m-3 float-md-left"
                  key={follower.login}
                >
                  <img
                    className="card-img-top img-custom"
                    src={follower.avatar_url}
                    alt={follower.login}
                  />
                  <div className="card-body">
                    <h3 className="card-title text-center">{follower.login}</h3>
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
      </>
    );
  }
}

export default App;
