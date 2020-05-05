import React from 'react';


class Display extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    };
    render() {
        return (
            <div>
                <h1>Hello, My name is {this.props.state.login}</h1>
                <h2>Or you can call me {this.props.state.name}</h2>
                <h3>I have {this.props.state.followers} followers</h3>
                <h3>I follow {this.props.state.following} people</h3>
                <img src={this.props.state.avatar_url} alt="its me"/>
            </div>
        )
    }
}
export default Display;