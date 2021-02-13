import React from 'react';

class GitStats extends React.Component {
    render() { 
        const user = this.props
        return ( 
            <div>
                <p>Repos: {user.repos}</p>
                <p>Contribution Graph</p>
            </div>
        );
    }
}

export default GitStats;
