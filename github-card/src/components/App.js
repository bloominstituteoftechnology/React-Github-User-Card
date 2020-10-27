import React from 'react'; 
import axios from 'axios'; 

import './App.css'; 
import Form from './Form';
import CardList from './CardList';

class App extends React.Component {

    constructor(){
        super(); 

        this.state = {
            userData: [], 
            term: '', 
        }
    }


    /* componentDidMount() {

        axios.get('https://api.github.com/users/Criscosmoes')
        .then(res => {
            this.setState({userData: res.data})
        })
        .catch(err => {
            console.log(err); 
        })


    }
 */

    onInputChange = e => {

        this.setState({term: e.target.value})
    }

    onFormSubmit = e => {

        e.preventDefault(); 

        if(this.state.term.length === 0){
            return; 
        }


        axios.get(`https://api.github.com/users/${this.state.term}`)
        .then(res => {
            console.log(res.data)
            this.setState({userData: [...this.state.userData, res.data]})
        })
        .catch(err => {
            console.log(err); 
        })

        this.setState({term: ''})


    }

    render() {

        return(
            <div className="App">
                <h1>Github User Search</h1>
                <Form term={this.state.term} onFormSubmit={this.onFormSubmit} onInputChange={this.onInputChange}/> 
                <CardList userData={this.state.userData} />
            </div>
        )
    }
}

export default App; 