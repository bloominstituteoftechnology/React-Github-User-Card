import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User';
import Search from './components/Search';

import { Container, Row, Col } from 'reactstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        login: "Qirhi"
      }
    }
  }



  componentDidMount() {
    // console.log("App Component did mount.")
    axios.get(`https://api.github.com/users/${this.state.user.login}`)
      .then(res => { 
        console.log("res.data: ", res.data) // 200
        this.setState({
          ...this.state,
          user: res.data // object
        })
        // console.log("this user: ", this.user)
      })
      .catch(err => console.log(err))
  }

  // console.log("this.state: ", user)

  searchUser = searchTerm => {
    // console.log("searching:", searchTerm);
    axios.get(`https://api.github.com/users/${searchTerm}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div className="App">
                <Container className="github-usercard">        
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>

      
        <User user={this.state.user}/>
        <Search searchUser={this.searchUser}/>

        </Col>
          </Row>
        </Container>
      
      
      </div>
    );
  }
}

export default App;
