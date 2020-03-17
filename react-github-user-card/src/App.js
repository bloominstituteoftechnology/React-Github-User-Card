import React from 'react';
import axios from 'axios';


class App extends React.Component {
  state = {
    users: [],
    userInfo: ''
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/Dmhabh1992')
      .then(res => {
        // res.data.message
        this.setState({
          users: res.data.users
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
            // res.data.message
            this.setState({
              users: res.data.users,
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
          value={this.state.usersText}
          onChange={this.handleChanges}
        />
        <div className="users">
          {/* {this.state.users.map(users => (
            <img width="200" src={users} key={users} alt={users} />
          ))} */}
        </div>
      </div>
    );
  }
}

export default App;

