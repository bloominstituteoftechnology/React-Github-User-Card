import React from 'react';

class Search extends React.Component {
    constructor(){
        super();
        this.state = {
            user: ''
        }
    }

    handleChange = (e) => {
        this.setState({user: e.target.value})
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchUser(this.state.user)
        this.setState({user: ''})
    }

    render(){
        return (
            <div className='SearchBar'>
                <form onSubmit={this.handleSubmit}>
                    <label>Search:</label>
                    <input name='user' onChange={this.handleChange} value={this.state.user}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default Search