import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import UserCard from './UserCard'
import {Row,Form, Button} from 'reactstrap'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  color: black;
`;

const Wrapper = styled.section`
  padding: 3em;
  background: lightblue;
`;

const Page = styled.div`
  margin:1em;
  padding:1em;
  border:1px solid blue;
  background:white;
`

const Background= styled.div`
background: lightblue;
`

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers:[],
      search:[],
      newUser:[]
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/tetondan')
    .then(res => res.json())
    .then(res => this.setState({users: res}))
    fetch('https://api.github.com/users/tetondan/followers')
    .then(res => res.json())
    .then(res => this.setState({followers: res}))
    .catch(err => console.log(err))
  }

  handleChange=(e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit= newData => {
    newData.preventDefault()
    this.setState({
      newUser:
        this.state.search
    })
  }

  // handleSubmit = formData => {
  //   this.setState({
  //     toDoList: [
  //       ...this.state.toDoList,
  //       {...formData, id:Date.now(), complete:false}
  //     ]
  //   })
  // }

  render() {   
    return (
      <Background>
        <Wrapper>
          <Title>
            Git Hub User Cards
          </Title>
          <Form onSubmit={this.handleSubmit}>
            <input name='search' placeholder='username' value={this.state.search} onChange={this.handleChange}></input>
            <Button >search</Button>
          </Form>
        </Wrapper>

        <Page>
          <Row>            
          <UserCard user={this.state.users} followers={this.state.followers}/> ;
          </Row>            
        </Page>

      </Background>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
