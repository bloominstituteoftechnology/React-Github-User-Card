import React, { Component } from 'react'

class UserSearch extends Component {
    constructor() {
        super();
        this.state = {User: ""};
    }


handleInput = (e) => {
    console.log(e.target.value)
    this.setState({
        ...this.state,
        User: e.target.value
    })
}

submitForm = (e) => {
    e.preventDefault();
    this.props.searchForUser(e, this.state.User);
    this.setState({User: ""})
    console.log(this.state.User);
}

render() {
    return (
        <div className="userSearch">
            <form onSubmit={this.submitForm}>
                <div className="userSearch__container">
                <div className="form__input">
                <input 
                value={this.state.User}
                onChange={this.handleInput}
                type="text"
                id="user"
                autocomplete="none"
                />
                <label for="user" className="user__label">
                    <span className="user__content">Enter Github ID</span>
                </label>
                </div>
                <button type="submit">Search For User</button>
                </div>
            </form>
        </div>
    )
}
}

export default UserSearch
