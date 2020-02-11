import React from 'react';
import './App.css';

class Follower extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='follower-container'>
                <div><img src={this.props.follower.avatar_url}/></div>
                <p>Username: {this.props.follower.login}</p>
            </div>
        );
    }
}

export default Follower;