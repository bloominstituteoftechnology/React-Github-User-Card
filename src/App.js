import React from 'react';
import './App.css';

// import { Card, Icon, Image } from 'semantic-ui-react';
import Card from './Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    console.log("First Render (mounting)");
    fetch('https://api.github.com/users/ChristopherHernandezW22')
      .then(res => res.json())
      .then(data => this.setState({ user:data }));
    fetch('https://api.github.com/users/ChristopherHernandezW22/followers')
      .then(res => res.json())
      .then(data => this.setState({ followers:data }));
  }

  componentDidUpdate () {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Card user={this.state.user} />
        {this.state.followers.map(follower => ( 
            <Card user={follower} key={follower.id} />
          ))}
    </div>
    );
  }
}

// followers={this.state.followers}

// function UserInfo(props) {
//   return (
//     <div>
//       <h2>{props.user.login}</h2>
//       <p>{props.user.location}</p>
//       <p>{props.user.url}</p>
//       <div>
//           {this.state.followers.map(follower => ( 
//             <Card user={follower} key={follower.id} />
//           ))}
//       </div>
//     </div>
//   );
// }

export default App;
