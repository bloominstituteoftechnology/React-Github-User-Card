import React from 'react';
import './App.css';
import { Accordion, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

//import components
import fetchUsers from './components/fetchUsers'
import fetchFollowers from './components/fetchFollowers'

class App extends React.Component {
  state = {
    users: {},
    input: "",
    followers: []
  }

  componentDidMount(){

    fetchUsers("katieolson84")
      .then((res) => {
        console.log(res)
        this.setState({
          users:res
        });
      })
    fetchFollowers("katieolson84")
      .then((res) => {
        console.log(res)
        this.setState({
          followers: res
        });
      })
    }

  
  onChange = (e) => {
    this.setState({
      input:e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.input);
    fetchUsers(this.state.input)
      .then(res => {
        this.setState({
          users: res,
          input: ""
        })
      })
    fetchFollowers(this.state.input)
    .then(res => {
      this.setState({
        followers: res,
        input: ""
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>GitHub User Cards</p>
        </div>
        <div className="form-container">
          <form onSubmit={this.onSubmit}>
            <label>
              <input
              type="text"
              value={this.state.input}
              placeholder='Username'
              onChange={this.onChange}
              />
              <button>Search</button>
            </label> 
          </form>
        </div>
        <div className="github-user">
            <Accordion>
              <Card className="card-container">
                <Card.Header className="user-container">
                  <div className="user-img">
                    <img width="200" src={this.state.users.avatar_url} alt={this.state.users.avatar_url} key={this.state.users.avatar_url}/>
                  </div>
                  <div className="user-details">
                    <h2>{this.state.users.name}</h2>
                    <h3>User Name: {this.state.users.login}</h3>
                    <h4>Following: {this.state.users.following}</h4>
                    <h4>Followers: {this.state.users.followers} </h4>
                  </div>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <i class="fas fa-angle-double-down"></i>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <div className="followers-container">
                      {this.state.followers.map(follower =>
                      <div className="follower-card" key={follower.id}>
                        <ul className="follower-details" >
                          <img width="60" className='follower-photo' src={follower.avatar_url} alt={follower.avatar_url}/> 
                          <h3 className="follower-username">{follower.login}</h3>
                        </ul>
                      </div>
                      )}
                    </div>
                  </Card.Body>  
                </Accordion.Collapse>
              </Card>
            </Accordion>
        </div>
      </div>
    );
  };
}


export default App;
