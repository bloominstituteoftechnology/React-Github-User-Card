import React, { Component } from 'react';
import { Followers } from './components/Followers';

import axios from 'axios';
class App extends Component {
  constructor() {
    super();
    this.state = {
      user: { },
      textInput: '',
      errorMessage: ''
      }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/mgomri')
    .then(response => this.setState({user: response.data}))
    .catch(error => console.log(error));
      
  }


  handleChange = e => {
    e.preventDefault();
    this.setState({
        ...this.state,
        textInput: e.target.value
    })
    
}


fetchUser = userName => {
    axios.get(`https://api.github.com/users/${userName}`)
    .then(response => 
        this.setState({
           
        ...this.states,
        user: response.data,
        errorMessage: ''
    }))
    .catch(error => this.setState({
        ...this.state,
        user: {},
        errorMessage: 'User not found'
    }))
}

handleSubmit= e => {
    e.preventDefault();
    this.fetchUser(this.state.textInput);
    this.setState({
        ...this.state,
        textInput: ''
    }) 
   
}
  render() { 
    return ( 
      <div className='box App'>
        <div className='form-div'>
          <form onSubmit={this.handleSubmit}>
                    <input type='text' className='input'
                           value={this.state.textInput} 
                           onChange={this.handleChange}
                        />
                    <button type='submit' className='button is-success' >Send</button>
                </form>
        </div>
    <div className='box user-section'>
      <h3 className='usrname'>Username: {this.state.user.login}</h3>
      <h3>user Id: {this.state.user.id}</h3>
      <h3 className='subtitle'>Number of Followers {this.state.user.followers}</h3>
      
      <img className='user-avatar' src={this.state.user.avatar_url} alt={this.state.user.id}/>
      
    </div>
      
          <Followers user={this.state.user}/>
          
      
        
      </div>
     );
  }
}
 
export default App;
