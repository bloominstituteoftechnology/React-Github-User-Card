import React from 'react';
import axios from 'axios';
import './app.css';

import Card from './components/card';

class App extends React.Component {
  state = {
    users: [],
    followers: []
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/kmcervan')
    .then((res) => {
      console.log(res.data);
      this.setState({
        users:res.data
      })
    })
    .catch(err => {
      console.log(err);
    });
    //steph put both .get(s) under this component and used the card.js to build out the followers
  }
  handleChange = e => {
    this.setState({

    })
  }
  render(){
    return (
    <div className="App">
     <h1>Your Profile</h1>
     <div className='my-git'>
       <img className='avatar' src={this.state.users.avatar_url} />
       <div className='git-info'>
       <h1 className='name'>{this.state.users.name}</h1>
       <p>{this.state.users.login}</p>
       <p>{this.state.users.html_url}</p>
       </div>
     </div>
     <div>
       <Card />
     </div>
    </div>
  );
  }
}

export default App;
