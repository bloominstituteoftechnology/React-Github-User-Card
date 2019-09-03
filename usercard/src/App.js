import React from 'react';

 import Header from './components/Header.js';
import Card from './components/Card.js';
import { Container } from 'shards-react';

 import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import './App.css';

 class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ghMyData: null,
      ghData: null,
    }
  }

   componentDidMount() {
    this.fetchData();
    this.fetchMyData();
  }

   fetchMyData = () => {
    fetch('https://api.github.com/users/adriancobon')
      .then(res => {
        return res.json()
      })
      .then(data => {
        return this.setState({ ghMyData: data})
      })
      .catch(err => console.log(err))
  }


   fetchData = () => {
    fetch('https://api.github.com/users/adriancobon/followers')
      .then(res => {
        return res.json()
      })
      .then(data => {
        return this.setState({ ghData: data })
      })
      .catch(err => console.log(err))
  }


   render() {
    return (
      <div className="App">
        <Header />
        {!this.state.ghData && <h1 className="loader">Loading users...</h1>}
        <Container className="card-container">
        {console.log(this.state.ghMyData)}
        {console.log(this.state.ghData)}
        {this.state.ghMyData
        &&
          <Card
            key={this.state.ghMyData.id}
            username={this.state.ghMyData.login}
            img={this.state.ghMyData.avatar_url}
            repos={this.state.ghMyData.html_url}
          />
        }
        {this.state.ghData     
        &&
        this.state.ghData.map(userData => (
          <Card
            key={userData.id}
            username={userData.login}
            img={userData.avatar_url}
            repos={userData.html_url}
          />
        ))
        }
        </Container>
      </div>
    );
  }
}

 export default App;
