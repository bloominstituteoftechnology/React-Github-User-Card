import axios from 'axios'
import React from 'react'
const user = {

}
class App extends React.Component {
  state = {
    name: "",
    login: "",
    avatar_url: "",
    public_repos: "",
    followers: "",
  }
  

  componentDidMount() {
    //this is the same function style as use effect GETTING data and putting it in an array.
    //Get the data from this api and pull only these specific values unless there are no value details, send to console log.
    axios.get("https://api.github.com/users/lindsay-deaton")
      .then((res) => {
        console.log(res.data)
        this.setState({
          name: res.data.name,
          login: res.data.login,
          avatar_url: res.data.avatar_url,
          public_repos: res.data.public_repos,
          followers: res.data.followers,
        })
      })
      .catch(err => {
        console.log(err);
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Github User Information</h1>
        <div className="userCard">
          <h3>{this.state.name}</h3>
          <img width="200" src={this.state.avatar_url} />
          <p>UserName: {this.state.login}</p>
          <p>Projects: {this.state.public_repos}</p>
          <p>Followers: {this.state.followers}</p>
        </div>
      </div>
    )
  }
}
export default App;