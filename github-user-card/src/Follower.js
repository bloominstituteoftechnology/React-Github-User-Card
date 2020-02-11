import React from 'react';

class Follower extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>Username: {this.props.follower.login}</p>
                <div><img src={this.props.follower.avatar_url}/></div>
            </div>
        );
    }
}

export default Follower;