import React from "react";
import GithubCalendar from "github-calendar";

import {
  GitCardContainer,
  GitUser,
  GitAvatar,
  GitInfo,
  GitFollowers,
  GitFollower,
  ContributionChart
} from "../styling/AppStyle";

class GitCard extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      GithubCalendar(".calendar", this.props.username, { responsive: true });
    }
  }

  render() {
    return (
      <GitCardContainer>
        <GitUser>
          <GitAvatar
            href={this.props.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={this.props.avatarUrl}
              alt={`${this.props.name}'s avatar`}
            />
          </GitAvatar>
          <GitInfo>
            <h1>{this.props.name}</h1>
            <h2>{this.props.username}</h2>
            <p>Location: {this.props.location}</p>
            <p>Repos: {this.props.repos}</p>
            <p>Followers: {this.props.followers}</p>
            <p>Following: {this.props.following}</p>
            <p>Bio: {this.props.bio}</p>
          </GitInfo>
        </GitUser>
        <ContributionChart className="calendar">Loading ...</ContributionChart>
        <GitFollowers>
          <h1>Followers</h1>
          {this.props.followerList.map((follower, idx) => (
            <GitFollower key={idx}>
              <a
                href={follower.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={follower.avatar_url}
                  alt={`${follower.login}'s avatar`}
                />
              </a>
              <p>{follower.login}</p>
            </GitFollower>
          ))}
        </GitFollowers>
      </GitCardContainer>
    );
  }
}

export default GitCard;

// NOTES ****

// this.props.profileUrl passed to App.js in return  avatarUrl={this.state.user.avatar_url}
// this.props.avatarUrl passed to App.js in return profileUrl={this.state.user.html_url}

// https://api.github.com/users/Lfritze - this in browser displays the data

// rel="noopener noreferrer" should be added to links containing target="_blank" as a precaution against reverse tabnabbing. For more information, please refer to the following article:
// https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/

// When to use target='_blank'   https://css-tricks.com/use-target_blank/

// Github Calendar https://github.com/IonicaBizau/github-calendar#:~:targetText=GitHub%20is%20home%20to%20over,Embed%20your%20GitHub%20calendar%20everywhere.
