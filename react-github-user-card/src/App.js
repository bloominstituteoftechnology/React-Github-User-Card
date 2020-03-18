import React from 'react';
import axios from 'axios';


class App extends React.Component {
  state = {
    users: [],
    followers: [],
    userInfo: ''
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/Dmhabh1992')
      .then(res => {
        console.log(res);
        // res.data.message
        this.setState({
          users: res.data
        });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    /// ALWAYS use an if statement
    if (prevState.users !== this.state.users) {
        axios
          .get('https://api.github.com/users/Dmhabh1992/followers')
          .then(res => {
            this.setState({
            followers: res.data
            });
          })
          .catch(err => console.log(err));
      }
  }

  handleChanges = e => {
    this.setState({
      usersText: e.target.value
    });
  };


  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.userInfo}
          onChange={this.handleChanges}
        />
        <div className="users">
          {/* {this.state.users.map(users => (

          ))} */}
          <div>{this.state.users.login} </div>
        </div>
      </div>
    );
  }
}

export default App;