import React from 'react';

import './SearchBox.styles.css';

class SearchBox extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    // console.log(props);
    handlechange = event => {
        // update state with each keystroke
        this.setState({ [event.target.name]: event.target.value });
        //comment
    };

    // class property to submit form
    submitItem = event => {
        event.preventDefault();

        this.setState({ item: "" });
        this.props.addItem(event, this.state.item);
    };

    render() {
        return (
            <div className='search-box'>
                <form onSubmit={this.handlechange}>
                    <input
                        className='search'
                        type='text'
                        name=''
                        placeholder='Search Username'
                        value={this.state.searchField}
                        onChange={this.handlechange}
                    />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}
export default SearchBox;