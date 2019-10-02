import React from "react";
import Grid from "@material-ui/core/Grid";

class Followers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid className="followers" container direction="column" spacing={2} justify="space-between" alignItems="center">
          {this.props.followers.map(followers => {
            console.log("followers", followers);
            return (
              <Grid className="following" container direction="row" justify="center" alignItems="center"   key={followers.id}>
                <img className="image" src={followers.avatar_url}></img>
                <div>
                  <p>Github url: {followers.url}</p>
                  <p>Username: {followers.login}</p>
                  <p>repos: {followers.repos_url}</p>
                </div>
              </Grid>
            );
          })}
      </Grid>
    );
  }
}

export default Followers;
