import React from 'react';
import axios from 'axios';
import UserCards from './UserCards';
import UserList from './UserList';
import lambdalogo from './assets/lambdalogo.png'
import githublogo from './assets/githublogo.png'
import './App.css';

class App extends React.Component {
  state = {
    dogImages: [],
    
}

componentDidMount() {
    axios.get("https://dog.ceo/api/breed/affenpinscher/images")
        .then(res => {
            this.setState({
                dogImages: res.data.message
            });
        })
        .catch(err => {
            console.log(err);
        });
}
componentDidUpdate(prevProps, prevState) {
  console.log('PrevProps: ', prevProps)
  console.log('PrevState: ', prevState)
  console.log('NewProps: ', this.props)
  console.log('NewState: ', this.state)
  if (prevState.dogImages !== this.state.dogImages) {
    console.log("update to dog image update")
    
  if (this.state.breed === "chihuahua") {
    axios.get("https://dog.ceo/api/breed/husky/images")
        .then(res => {
            this.setState({
                dogImages: res.data.message,
                breed: 'husky'
            });
        })
        .catch(err => {
            console.log(err);
        });
}
  }
}
handleChange = (e) => {
    this.setState({
        breed: e.target.value
    })
}



render() {
  return(
    <div className='container'>
      <div className='header'>
      <img src={lambdalogo} alt="Lambda Logo"></img>
      <p>❤️'s</p>
      <img src={githublogo} alt="GitHub Logo"></img>
      </div>
        <UserCards />
        <UserList />
    </div>
  ) 
      
}



}

export default App;
