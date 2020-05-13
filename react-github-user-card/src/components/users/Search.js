import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Search extends Component {
    state= {
        text:''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === ''){
            this.props.setAlert ('please enter characters', 'light');
        }else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: ''});
        }  
    };

    onChange= (e) => this.setState({ [e.target.name]: e.target.value})
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input type="text" 
                    name='text' 
                    placeholder='Search Users...' 
                    value={this.state.text}
                    onChange={this.onChange}
                    />

                    <input
                    type='submit'
                    value='Search'
                    className="btn btn-dark btn-block"
                    />
                </form>
                <button className="btn btn-ligh btn-block" onClick={this.props.clearUsers}>Clear</button>
            </div>
        )
    }
}

export default Search;