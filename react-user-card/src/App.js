import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './Card';
import Lambdalogo from './lambdalogo.png';
import Githublogo from './githublogo.png';
import Followers from './Followers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []     
    };
  }  

  componentDidMount() {
    axios
      .get('https://api.github.com/users/Pete1701')
      .then(res => {   
        console.log(res.data)     
        this.setState({
          user: [res.data]         
        });
      })
      .catch(err => console.log(err.message));

    // axios
    //   .get('https://api.github.com/users/Pete1701/followers')
    //   .then(res => {
    //     console.log(res.data)
    //   })
    //   .catch(err => console.log(err.message));
    // }

      axios
      .get('https://api.github.com/users/Pete1701/followers')
      .then(res => {   
        console.log(res.data)
        
          res.data.map(item => {
            axios.get(item.url)
            .then(res => {
              console.log('bio', res.data);
              this.state.followers.push(res.data);
              this.setState({
                followers: this.state.followers
              })              
            })          
        });

        console.log('abc', this.state.followers)
        // this.setState({
        //   followers: res.data.map(item => {
        //     return item.url
        //   })          
        // });
      })
      .catch(err => console.log(err.message));
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <img src={Lambdalogo} alt="Lambda Logo"/>
          <p>❤️'s</p>
          <img src={Githublogo} alt="GitHub Logo" />
        </div>
        <div className="cards">
          <Card
            user={this.state.user}            
          />
          <Followers
            followers={this.state.followers}
          />
        </div>
      </div>
    );
  }  
}

export default App;
