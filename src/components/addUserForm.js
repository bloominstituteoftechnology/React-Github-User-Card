import React, {Component} from 'react';

class AddUserForm extends Component{
	constructor(){
		super()
		this.state ={
			username:''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()

		this.props.addUser(event, this.state.username)

		this.setState({
			username:''
		})
	}

	handleChange = (event) => {
		this.setState({
			username: event.target.value
		})
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
	            <input 
	            placeholder="enter in user name" 
	            type="text" 
	            value={this.state.username}
	            onChange = {this.handleChange}
	            />
	            <button> Add </button>
	         </form>
        )
	}
}

export default AddUserForm;