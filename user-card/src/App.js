import React from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import './index.css';


class App extends React.Component {
  state = {
    profiles: {}, 
    profileText: '',
    followers: [],
    error: '',
  };
 
  componentDidMount() {
    axios
      .get('https://api.github.com/users/sarahmarie1976') 
      .then((res) => {
        
        this.setState({
          profiles: res.data, 
        });
      })
      .catch((err) => console.log(err));

      axios
      .get('https://api.github.com/users/sarahmarie1976/followers')  
      .then((res) => {
        this.setState({
          followers: res.data, 
        });
        // console.log(this.state.followers);
      })
      .catch((err) => console.log(err));
  }
  
  handleChanges = (e) => {
    this.setState({
      profileText: e.target.value,
    });
  };


  componentDidUpdate(prevProps, prevState) {
  
    if (prevState.profiles !== this.state.profiles) {
      if (this.state.profileText === '') {
        axios
          .get('https://api.github.com/users/sarahmarie1976') 
          .then((res) => {
            this.setState({
              profiles: res.data, 
            });
          })
          .catch((err) => console.log(err));
      }
    }
  }

  fetchprofiles = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.profileText}`) 
      .then((res) => {
        this.setState({
          profiles: res.data, 
          error: '',
        });
      })
      .catch((err) => {
        this.setState({
          error: 'Looks like we could not find that user. Please try again',
        });
      });

      axios
      .get(`https://api.github.com/users/${this.state.profileText}/followers`)  
      .then((res) => {
        this.setState({
          followers: res.data, 
          error: '',
        });
        // console.log(this.state.followers);
      })
      .catch((err) => {
        this.setState({
          error: 'Looks like we could not find that user. Please try again',
        });
      });
  };

  render() {
    return (
     
      <div className="App">
         <Card style={{ margin: '3%', width: '35%', marginLeft: '32%', color: '#696969', fontFamily: 'Fondamento cursive ', background: 'whitesmoke',  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19'}}>
        <CardText style={{ fontSize: '30px', marginLeft: '38%'}}>Github Search</CardText>
        <input style={{ width: '60%', marginLeft: '20%'}}
          type="text"
          value={this.state.profileText}
          onChange={this.handleChanges}
        />
        <Button style={{ width: '40%', margin: '2%', background: '#e5d6f3', color: '#696969', marginLeft: '32%',  boxShadow: '5px 10px 18px #888888'}} onClick={this.fetchprofiles}>Fetch profiles</Button>
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        </Card>
        <div className="profiles">
          {!this.state.error &&
      
            <>
              
              <CardBody style={{ margin: '3%', textAlign: 'center', width: '50%', marginLeft: '25%', background: '#e5d6f3', fontFamily: 'Fondamento cursive ', fontSize: '20px',  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19' }}>
              < CardImg style={{ width: '20%', boxShadow: '10px 10px 5px grey' }} src={this.state.profiles.avatar_url} alt="Profile Picture"  />
              <CardTitle style={{ margin: '2%'}}>{this.state.profiles.name}</CardTitle>
              <CardText>Job: {this.state.profiles.company}</CardText>
              <CardText>Bio:  {this.state.profiles.bio}</CardText>
              <CardText>Twitter Handle:  {this.state.profiles.twitter_username}</CardText>
              <CardText style={{ marginBottom: '-5px'}}>Followers:  {this.state.profiles.followers} </CardText>
              {this.state.followers.map((follower) => (
                <a href={`https://api.github.com/users/${follower.login}`} key={follower.id}>{follower.login}<br /></a>
              ))}
              <CardText>Following:  {this.state.profiles.following} </CardText>
              
              </CardBody>
            </>
            }
        </div>
      </div>
    );
  }
}

export default App;
