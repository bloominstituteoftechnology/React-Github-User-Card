import React from 'react';
import axios from 'axios';
import GitCard from './Components/GitCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

      user: 'greysonhamilton',
      userData: {},
      userFollowers: [],
      input: ''

    };

  }

  componentDidMount() {

    axios.get(`https://api.github.com/users/${this.state.user}`)

    .then((res) => {

        console.log(res.data);

        this.setState({

          userData: res.data

        })

    })

    .catch((err) => {

        console.log(err);

    })

    axios.get(`https://api.github.com/users/${this.state.user}/followers`)

      .then((res) => {

        this.setState({

          userFollowers: res.data

        })

      })

      .catch((err) => {

        console.log(err);

      })

  }

  fetchUser = (e) => {

    e.preventDefault();

    alert(`Fetching ${this.state.input} data.`);

    axios.get(`https://api.github.com/users/${this.state.user}`)

    .then((res) => {

        this.setState({
          
          userData: res.data

        });

    })

    .catch((err) => {

        console.log(err);

    })

    axios.get(`https://api.github.com/users/${this.state.user}/followers`)

    .then((res) => {

      this.setState({

        userFollowers: res.data

      })

    })

    .catch((err) => {

      console.log(err)

    })

  }

  handleChange = (e) => {

    console.log(e.target.value);
    this.setState({

      input: e.target.value,
      user: e.target.value

    })

  }

  render() {

    if(this.state.userData.length === 0) {

      return (<p>Loading Cards...</p>)

    } else {

    return (

      <div className="App">
        <div>
          <h1>Greetings GitHub User</h1>
          <h2>Please enter the name of the user you wish to view.</h2>
        </div>
        <div>
          <form onSubmit = {this.fetchUser}>
            <input 
              id = 'userInput' 
              type = 'text' 
              placeholder = 'Enter GitHub account name here.' 
              value = {this.state.input}
              onChange = {this.handleChange}
             />
            <button>
              Submit
            </button>
          </form>
        </div>
        <div>
          <GitCard info = {this.state.userData} followers = {this.state.userFollowers} />
        </div>
      </div>

    )}

  }

}

export default App
