import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <div className="search-user">
                <form onSubmit={this.props.fetchUsers}>
                    <input
                        type="text"
                        value={this.props.input}
                        onChange={this.props.handleChanges}
                    />
                    <button type='submit'>Find New User</button>
                </form>
            </div>
        )
    }
}