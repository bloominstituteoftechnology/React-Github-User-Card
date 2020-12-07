import React from 'react';
import axios from 'axios';
import './App.css';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      userName: "",
      userImage: "",
      userDescription: "",
      userLocation: "",
    }
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      userName: e.target.value
    })
  }

  fetchUsers = () => {
    axios.get(`https://api.github.com/users/${this.state.userName}/followers`)
      .then(res => {
        this.setState({
          ...this.state,
          userName: res.data.name,
          userImage: res.data.avatar_url,
          userDescription: res.data.bio,
          userLocation: res.data.location
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/DanielleKoduru')
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          userName: res.data.name,
          userImage: res.data.avatar_url,
          userDescription: res.data.bio,
          userLocation: res.data.location
        });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userName !== this.state.userName) {
      console.log("User has changed!");
    }
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Cards</h1>
        <Card className="card">
          <CardImg topwidth="55%" src={this.state.userImage} alt="userImage" />
          <CardBody>
            <CardTitle tag="userName">{this.state.userName}</CardTitle>
            <CardText>{this.state.bio}</CardText>
            <CardText>{this.state.location}</CardText>
          </CardBody>
        </Card>
        <input
          placeholder="userName"
          value={this.state.users}
          type="text"
          onChange={this.handleChanges}
        />
        <Button color="danger" onClick={this.fetchUsers}>User Info</Button>
      </div>
    )
  }
}

export default App;
