import React from 'react';
import axios from 'axios';
import Followers from "./components/Followers";
import Profile from "./components/Profile";



class App extends React.Component {
 state = {
   user: {},
   followers: []
 };
  componentDidMount() {
    axios.get('https://api.github.com/users/LeesahMasko').then(response => {
      console.log(response.data, "user response.data");
      this.setState({ user: response.data });
    });
    axios.get('https://api.github.com/users/LeesahMasko/followers').then(response => {
      console.log(response.data, "followers response.data");
      this.setState({ followers: response.data});
    });
  }

  render() {
    console.log(this.state.user);
    console.log(this.state.followers);
    return (
      <>
        <div className="app">
          <h1>GitHub User Cards</h1>
          <Profile user={this.state.user} />
          <Followers
            followers={this.state.followers}
            key={this.state.followers}
          />
        </div>
      </>
    );
  }
}

export default App;

/*
  "login": "LeesahMasko",
  "id": 60702582,
  "node_id": "MDQ6VXNlcjYwNzAyNTgy",
  "avatar_url": "https://avatars2.githubusercontent.com/u/60702582?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/LeesahMasko",
  "html_url": "https://github.com/LeesahMasko",
  "followers_url": "https://api.github.com/users/LeesahMasko/followers",
  "following_url": "https://api.github.com/users/LeesahMasko/following{/other_user}",
  "gists_url": "https://api.github.com/users/LeesahMasko/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/LeesahMasko/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/LeesahMasko/subscriptions",
  "organizations_url": "https://api.github.com/users/LeesahMasko/orgs",
  "repos_url": "https://api.github.com/users/LeesahMasko/repos",
  "events_url": "https://api.github.com/users/LeesahMasko/events{/privacy}",
  "received_events_url": "https://api.github.com/users/LeesahMasko/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Lisa Maskovich",
  "company": "Lambda School",
  "blog": "",
  "location": "San Francisco, CA",
  "email": null,
  "hireable": null,
  "bio": "Lisa Maskovich\r\n",
  "public_repos": 34,
  "public_gists": 0,
  "followers": 15,
  "following": 5,
  "created_at": "2020-02-05T14:34:38Z",
  "updated_at": "2020-04-07T18:06:27Z"
*/
