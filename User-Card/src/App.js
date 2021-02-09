import React from 'react';
import axios from 'axios'
import './App.css';
import { render } from 'react-dom';

//https://api.github.com/users/izzymajors


class App extends React.Component {
  state =  {
    users: [],
    login:"",
    name: "",
    company: "",
    type: "",
    url:"",
  };

  componentDidMount() {
    axios
    .get("https://api.github.com/users/izzymajors")
    .then(res => {
      this.setState({
        users: res.data.message,
        login: res.data.login,
        name: res.data.name,
        company: res.data.company,
        type: res.data.type,
        url: res.data.url,

      })
    })
    .catch((err) => console.log(err));
  }

  handleChange = () => {
    this.setState({
     
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios
    .get(`https://api.github.com/users/${this.state.login}`)
    .then( res => {
      this.setState({
        name: res.data.name,
        company: res.data.company,
        type: res.data.type,
        url: res.data.url,
      })
    })
  }



render() {
  console.log('rendering');
  return(
    <div className="App">
      <h1>Hello User</h1>
      <form>
        <input value={this.state.users}
         onChange={this.handleChange}/>
      </form>

    </div>
  )
}
}
export default App;
