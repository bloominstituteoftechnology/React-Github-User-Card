import React from 'react'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
    }
//Handle Changes -------------------------------------------------------------------------------------
handleChanges = event => {
    this.setState({
        query: event.target.value
    });
};
//Render------------------------------------------------------------------------------------------------
render() {
    return(
        <div>
            <input
            type="text"
            value={this.state.query}
            onChange={this.handleChanges}
            className='search'
            placeholder='enter GitHub handle'
            />
            <button className="search_btn" onClick={() => this.props.searchUser(this.state.query)}>Search</button>
        </div>
     )
    }
}
export default Search;