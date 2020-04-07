import React, { Component } from "react";
import axios from "axios";
import FollowerCard from "./follower-card";
import "./followers-list.scss";

class FollowerList extends Component {
  constructor() {
    super();
    this.state = {
      followers: null,
    };
  }
  componentDidMount() {
    const { followerUrl } = this.props;
    axios
      .get(followerUrl)
      .then((res) => {
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { followers } = this.state;
    return (
      <div>
        {followers && (
          <div className="card-container">
            {followers.map((follower) => {
              return <FollowerCard key={follower.id} followerLogin={follower.login} />;
            })}
          </div>
        )}
      </div>
    );
  }
}
export default FollowerList;
