import React, { Component } from "react";
import axios from "axios";
import "./followers-list.scss";
import Axios from "axios";

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
    return <div>followerlist</div>;
  }
}
export default FollowerList;
