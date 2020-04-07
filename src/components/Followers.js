import React from "react";

const Followers = props => {
  return (
    <>
      <div className="followersCont">
        {props.followers.map(person => (
          <div className="followerCard">
            <img width="200px" src={person.avatar_url} alt="" />
            <h3>GitHub Name: {person.login}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Followers;


/*
  {
    "login": "DanialHadavi",
    "id": 52673082,
    "node_id": "MDQ6VXNlcjUyNjczMDgy",
    "avatar_url": "https://avatars1.githubusercontent.com/u/52673082?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/DanialHadavi",
    "html_url": "https://github.com/DanialHadavi",
    "followers_url": "https://api.github.com/users/DanialHadavi/followers",
    "following_url": "https://api.github.com/users/DanialHadavi/following{/other_user}",
    "gists_url": "https://api.github.com/users/DanialHadavi/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/DanialHadavi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/DanialHadavi/subscriptions",
    "organizations_url": "https://api.github.com/users/DanialHadavi/orgs",
    "repos_url": "https://api.github.com/users/DanialHadavi/repos",
    "events_url": "https://api.github.com/users/DanialHadavi/events{/privacy}",
    "received_events_url": "https://api.github.com/users/DanialHadavi/received_events",
    "type": "User",
    "site_admin": false
  }, */


