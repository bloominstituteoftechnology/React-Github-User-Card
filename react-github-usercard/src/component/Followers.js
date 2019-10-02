import React from "react";
import Grid from "@material-ui/core/Grid";
import github from "../imgs/github.png"

class Followers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="followers">
          <h1 className="header">Mildred's awesome <img className="git-logo" src={github}/> followers ❤️</h1>
        <div>
          <a href="#slide-0">0</a>
          <a href="#slide-1">1</a>
          <a href="#slide-2">2</a>
          <a href="#slide-3">3</a>
          <a href="#slide-4">4</a>
          <a href="#slide-5">5</a>
          <a href="#slide-6">6</a>
          <a href="#slide-7">7</a>
          <a href="#slide-8">8</a>
          <a href="#slide-9">9</a>
          <a href="#slide-10">10</a>
          <a href="#slide-11">11</a>
          <a href="#slide-12">12</a>
          <a href="#slide-13">13</a>
          <a href="#slide-14">14</a>
          <a href="#slide-15">15</a>
          <a href="#slide-16">16</a>
          <a href="#slide-17">17</a>
          <a href="#slide-18">18</a>
          <a href="#slide-19">19</a>
        </div>
        <div className="slides">
          {this.props.followers.map((followers, index) => {
            return (
              <div
                id={`slide-${index}`}
                className="following"
                key={followers.id}
              >
                <img className="image" src={followers.avatar_url}></img>
                <div>
                  <p>Github url: {followers.url}</p>
                  <p>Username: {followers.login}</p>
                  <p>repos: {followers.repos_url}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Followers;
