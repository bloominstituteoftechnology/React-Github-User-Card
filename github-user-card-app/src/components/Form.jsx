import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            textInput: '',
            user: {},
            errorMessage: ''
        }
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' className='input'
                           value={this.state.textInput} 
                           onChange={this.handleChange}
                        />
                    <button type='submit' className='button is-success' >Send</button>
                </form>
                <h2>{this.state.user.html_url}</h2>
                <img src={this.state.user.avatar_url} alt={this.state.user.url}/>
                <h2>{this.state.errorMessage}</h2>
            </div>
         );
    }
}
 
export default Form;