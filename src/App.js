import React, {Component} from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import lambdalogo from './lambdalogo.png';
import githublogo from './githublogo.png';

class App extends Component {
 
  constructor() {
    super();

    this.state = {
      myInfo: [],
      followers: []
    };

  }

  getMyInfo = () => {
    axios.get('https://api.github.com/users/tanveersaleem786')
    .then( response => {
      this.setState({myInfo: response.data});
      this.getMyFollowers();
    })
    .catch( err => {
      console.log("Error:", err);
    });
  }

  getMyFollowers = () => {
    axios.get('https://api.github.com/users/tanveersaleem786/followers')
    .then( response => {
      let followers = response.data;
      followers.forEach( follower => {
        axios.get(`https://api.github.com/users/${follower.login}`)
          .then( response => {
            this.setState({
              followers: [...this.state.followers, response.data]
            });
          })
          .catch( err => {
            console.log("Error:", err);
          })
      });
    })
    .catch( err => {
      console.log("Error:", err);
    });
  }


  componentDidMount() {
    this.getMyInfo();
  }

  render() {
    return (
        <div className="container">
          <div className="header">
            <img src={lambdalogo} alt="Lambda Logo" />
            <p>❤️'s</p>
            <img src={githublogo} alt="GitHub Logo" />
          </div>
          <div className="cards">
            <UserCard user={this.state.myInfo} />
            {this.state.followers.map((follower, index) => {
              return (<UserCard user={follower} key={index} />) 
            })}

            <div>
              <GitHubCalendar username="tanveersaleem786" years={[2019]} fullYear={false}>
                <ReactTooltip delayShow={50} html />
              </GitHubCalendar>
            </div>
            
          </div>
        </div>
    );
  }
}

export default App;
