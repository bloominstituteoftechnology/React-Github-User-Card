import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col
} from "shards-react";
import "./App.css";
import FollowCard from "./components/FollowCards";
import RepoCard from "./components/RepoCards";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: "hello",
      followers: [],
      repos: []
    };
  }

  componentDidMount() {
    this.fetchGitHub();
    this.fetchGitFollowers();
    this.fetchGitRepos();
  }

  fetchGitHub = () => {
    fetch("https://api.github.com/users/lawsonarichard")
      .then(response => {
        return response.json();
      })
      .then(users => this.setState({ users: users }))
      .catch(err => {
        console.log(err);
      });
  };

  fetchGitFollowers = () => {
    fetch("https://api.github.com/users/lawsonarichard/followers")
      .then(response => {
        return response.json();
      })
      .then(followers => this.setState({ followers: followers }))
      .catch(err => {
        console.log(err);
      });
  };

  fetchGitRepos = () => {
    fetch("https://api.github.com/users/lawsonarichard/repos")
      .then(response => {
        return response.json();
      })
      .then(repos => this.setState({ repos: repos }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="mainWrapper">
        <div className="mainContainer">
          <div className="mainUserWrapper">
            <Container className="mainUserMeta">
              <Row>
                <Col lg="3">
                  <img src={`${this.state.users.avatar_url}`} />
                </Col>
                <Col lg="5">
                  <h2>{this.state.users.name}</h2>
                  <p>{this.state.users.location}</p>

                  <p>"{this.state.users.bio}"</p>
                </Col>
                <Col sm="2">
                  <h2>{this.state.users.following}</h2>
                  <p>Following</p>
                </Col>
                <Col sm="2">
                  <h2>{this.state.users.followers}</h2>
                  <p>Followers</p>
                </Col>
                <Col sm="2">
                  <h2>{this.state.users.public_repos}</h2>
                  <p>Repos</p>
                </Col>
              </Row>
            </Container>
          </div>
          <Container className="followers-container">
            <h1>Followers </h1>
            <div className="followersWrapper">
              {this.state.followers.map(followers => (
                <FollowCard followers={followers} />
              ))}
            </div>
          </Container>
          <Container className="repo-container">
            <h1>Repos</h1>
            <div className="reposWrapper">
              {this.state.repos.map(repos => (
                <RepoCard repos={repos} />
              ))}
            </div>
          </Container>
        </div>
        <div className="footerWrapper">
          <Container className="footer-container">
            <Footer />
          </Container>
        </div>
      </div>
    );
  }
}
export default App;
